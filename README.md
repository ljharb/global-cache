# global-cache <sup>[![Version Badge][2]][1]</sup>

[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

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

[1]: https://npmjs.org/package/global-cache
[2]: https://versionbadg.es/ljharb/global-cache.svg
[5]: https://david-dm.org/ljharb/global-cache.svg
[6]: https://david-dm.org/ljharb/global-cache
[7]: https://david-dm.org/ljharb/global-cache/dev-status.svg
[8]: https://david-dm.org/ljharb/global-cache#info=devDependencies
[11]: https://nodei.co/npm/global-cache.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/global-cache.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/global-cache.svg
[downloads-url]: https://npm-stat.com/charts.html?package=global-cache
