1.0.3 / 2015-10-19
=================
  * [Robustness] Ensure that when `Symbol` and `Symbol.for` are available, they're real Symbols and not gross fake ones
  * package.json: use object form of "authors", add "contributors"
  * [Dev Deps] update `jscs`, `eslint`, `@ljharb/eslint-config`

1.0.2 / 2015-10-14
=================
  * [Deps] update `define-properties`
  * [Dev Deps] update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config`, `nsp`, `semver`
  * [Tests] up to `io.js` `v3.3`, `node` `v4.2`
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG

1.0.1 / 2015-08-12
=================
  * [Fix] Use `Symbol.for` to ensure that multiple instances of `global-cache` on the page share the same cache.
  * [Tests] Test up to `io.js` `v3.0`
  * [Dev Deps] Update `jscs`, `tape`, `eslint`, `semver`, `define-properties`; use my personal shared `eslint` config

1.0.0 / 2015-07-01
=================
  * Initial release.
