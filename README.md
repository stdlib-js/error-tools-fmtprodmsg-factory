<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# fmtprodmsgFactory

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a `function` which formats an error message for production.



<section class="usage">

## Usage

```javascript
import fmtprodmsgFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg-factory@deno/mod.js';
```

#### fmtprodmsgFactory( \[options] )

Returns a `function` which formats an error message for production.

```javascript
var opts = {};
var fcn = fmtprodmsgFactory( opts );
// returns <Function>

var msg = fcn( '3' );
// returns 'Minified stdlib error code: 3. Visit https://stdlib.io/docs/api/latest/error-decoder.html?code=3 for the full message.'
```

The function accepts the following `options`:

-   **url**: website URL for full error message.
-   **message**: error message template with `{{url}}` and `{{code}}` placeholders that will be replaced.

To set a custom URL, use the `url` option:

```javascript
var opts = {
    'url': 'https://stdlib.io/error-decoder.html'
};

var fcn = fmtprodmsgFactory( opts );
// returns <Function>

var msg = fcn( '8' );
// returns 'Minified stdlib error code: 8. Visit https://stdlib.io/error-decoder.html?code=8 for the full message.'
```

To change the error message template, use the `message` option:

```javascript
var opts = {
    'message': 'Error code: {{code}}. See: {{url}}.'
};

var fcn = fmtprodmsgFactory( opts );
// returns <Function>

var msg = fcn( '27', 'foo', 'bar' );
// returns 'Error code: 27. See: https://stdlib.io/docs/api/latest/error-decoder.html?code=27&arg[]=foo&arg[]=bar.'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import fmtprodmsgFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg-factory@deno/mod.js';

var formatProdErrorMessage = fmtprodmsgFactory();
var msg = formatProdErrorMessage( '3', 'foo' );
// returns 'Minified stdlib error code: 3. Visit https://stdlib.io/docs/api/latest/error-decoder.html?code=3&arg[]=foo for the full message.'

msg = formatProdErrorMessage( '5', 'foo', 'bar' );
// returns 'Minified stdlib error code: 5. Visit https://stdlib.io/docs/api/latest/error-decoder.html?code=5&arg[]=foo&arg[]=bar for the full message.'

msg = formatProdErrorMessage( '5', 'foo', 'bar', 123 );
// returns 'Minified stdlib error code: 5. Visit https://stdlib.io/docs/api/latest/error-decoder.html?code=5&arg[]=foo&arg[]=bar&arg[]=123 for the full message.'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/error-tools-fmtprodmsg-factory.svg
[npm-url]: https://npmjs.org/package/@stdlib/error-tools-fmtprodmsg-factory

[test-image]: https://github.com/stdlib-js/error-tools-fmtprodmsg-factory/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/error-tools-fmtprodmsg-factory/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/error-tools-fmtprodmsg-factory/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/error-tools-fmtprodmsg-factory?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/error-tools-fmtprodmsg-factory.svg
[dependencies-url]: https://david-dm.org/stdlib-js/error-tools-fmtprodmsg-factory/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/error-tools-fmtprodmsg-factory/tree/deno
[deno-readme]: https://github.com/stdlib-js/error-tools-fmtprodmsg-factory/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/error-tools-fmtprodmsg-factory/tree/umd
[umd-readme]: https://github.com/stdlib-js/error-tools-fmtprodmsg-factory/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/error-tools-fmtprodmsg-factory/tree/esm
[esm-readme]: https://github.com/stdlib-js/error-tools-fmtprodmsg-factory/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/error-tools-fmtprodmsg-factory/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/error-tools-fmtprodmsg-factory/main/LICENSE

</section>

<!-- /.links -->
