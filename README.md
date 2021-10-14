# global-cache <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Sometimes you have to do horrible things, like use the global object to share a singleton. Abstract that away, with this!

This attaches a cache to the global object. It attempts to make it as undiscoverable as possible:
 - uses Symbols if available
 - if not, uses a string key that is not a valid identifier, so as not to show up in dot-notation browser autocomplete
 - makes it non-enumerable if property descriptors are supported

Keys are required to be strings or symbols.

## Example

```js
var cache = require('global-cache');
var assert = require('assert');

var value = {};
assert(cache.get(key) === undefined);
assert(cache.has(key) === false);

cache.set(key, value);
assert(cache.get(key) === value);
assert(cache.has(key) === true);

cache.delete(key);
assert(cache.get(key) === undefined);
assert(cache.has(key) === false);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/global-cache
[npm-version-svg]: https://versionbadg.es/ljharb/global-cache.svg
[deps-svg]: https://david-dm.org/ljharb/global-cache.svg
[deps-url]: https://david-dm.org/ljharb/global-cache
[dev-deps-svg]: https://david-dm.org/ljharb/global-cache/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/global-cache#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/global-cache.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/global-cache.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/global-cache.svg
[downloads-url]: https://npm-stat.com/charts.html?package=global-cache
[codecov-image]: https://codecov.io/gh/ljharb/global-cache/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/global-cache/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/global-cache
[actions-url]: https://github.com/ljharb/global-cache/actions
