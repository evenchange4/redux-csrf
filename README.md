# redux-csrf

> Keep your csrf token inside your Redux store.

[![Travis][build-badge]][build] [![Codecov Status][codecov-badge]][codecov] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[![Dependency Status][dependency-badge]][dependency] [![devDependency Status][devDependency-badge]][devDependency] [![peerDependency Status][peerDependency-badge]][peerDependency]

[build-badge]: https://img.shields.io/travis/evenchange4/redux-csrf/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/redux-csrf

[npm-badge]: https://img.shields.io/npm/v/redux-csrf.svg?style=flat-square
[npm]: https://www.npmjs.org/package/redux-csrf

[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/redux-csrf.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/redux-csrf?branch=master

[npm-downloads]: https://img.shields.io/npm/dt/redux-csrf.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/redux-csrf.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/

[dependency-badge]: https://david-dm.org/evenchange4/redux-csrf.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/redux-csrf
[devDependency-badge]: https://david-dm.org/evenchange4/redux-csrf/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/redux-csrf#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/redux-csrf/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/redux-csrf#info=peerDependencies

## Installation

```console
$ npm install redux-csrf --save
```

## Usage

```js
import { default as reducer, actions } from 'redux-csrf';

// Server side with csurf middleware
store.dispatch(actions.setCsrfToken(req.csrfToken()));

// Reducer
combineReducers({
  ...otherReducers
  _csrf: reducer,
});
```

## API

### `setCsrfToken(token)`

Set CSRF token to redux store.

## Test

```
$ npm run lint
$ npm run test:watch
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)
