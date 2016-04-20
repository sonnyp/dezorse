'use strict'

var dezorse = require('./index')
var assert = require('assert')

function zorse (cb) {
  cb()
}

var zorseSafe = dezorse(zorse)

var called = false
zorseSafe(function () {
  called = true
})
assert.equal(called, false)

setTimeout(function () {
  assert.equal(called, true)
})
