dezorse
========

[![Build Status](https://img.shields.io/travis/sonnyp/dezorse/master.svg?style=flat-square)](https://travis-ci.org/sonnyp/dezorse/branches)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Like [dezalgo](https://github.com/npm/dezalgo) but let you choose your "asap" function.
If you're writing for Node.js only or need very high throughput, just use dezalgo.

dezorse defaults to setTimeout which is available everywhere.

# Getting started


`npm install dezorse`

----

```javascript
var dezorse = require('dezorse');
```

or

```xml
<script src="node_modules/dezorse/index.js"></script>
```
```javascript
var dezorse = window.dezorse
```

# Usage

```js
// maybe you don't care for performances ?
dezorse(fn) // will use setTimeout

// maybe you need to yield for IO/reflow/repaint ?
// https://github.com/YuzuJS/setImmediate
dezorse(fn, setImmediate)

// maybe you just need Node.js support ? (bad example, use dezalgo)
dezorse(fn, process.nextTick)

// maybe you already have a Promise polyfill or only target platforms with Promise support ?
dezorse(fn, function () {
  Promise.resolve().then(fn)
})
```

# Test

```
npm install standard
npm test
```
