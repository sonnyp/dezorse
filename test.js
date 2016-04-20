'use strict'

var dezhorse = require('./index')
var assert = require('assert')

function zhorse (cb) {
  cb()
}

var zhorseSafe = dezhorse(zhorse)

var called = false
zhorseSafe(function () {
  called = true
})
assert.equal(called, false)

setTimeout(function () {
  assert.equal(called, true)
})
