dezhorse
========

[![Build Status](https://img.shields.io/travis/sonnyp/dezhorse/master.svg?style=flat-square)](https://travis-ci.org/sonnyp/dezhorse/branches)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Like [dezalgo](https://github.com/npm/dezalgo) but let you choose your "asap" function.
If you're writing for Node.js only or need very high throughput, just use dezalgo.

dezhorse defaults to setTimeout which is available everywhere.

# Getting started


`npm install dezhorse`

----

```javascript
var dezhorse = require('dezhorse');
```

or

```xml
<script src="node_modules/dezhorse/index.js"></script>
```
```javascript
var dezhorse = window.dezhorse
```

# Usage

```js
// maybe you don't care for performances ?
dezhorse(fn) // will use setTimeout

// maybe you need to yield for IO/reflow/repaint ?
// https://github.com/YuzuJS/setImmediate
dezhorse(fn, setImmediate)

// maybe you just need Node.js support and don't care much for throughput ?
dezhorse(fn, process.nextTick)

// maybe you already have a Promise polyfill or only support platforms with Promise support ?
dezhorse(fn, function () {
  Promise.resolve().then(fn)
})
```

# Test

```
npm install standard
npm test
```
