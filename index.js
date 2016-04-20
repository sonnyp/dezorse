;(function () {
  'use strict'

  function dezhorse (cb, next) {
    var asap = next || setTimeout
    var sync = true
    asap(function () {
      sync = false
    })

    return function zhorseSafe () {
      var args = arguments
      var me = this
      if (sync) {
        asap(function () {
          cb.apply(me, args)
        })
      } else {
        cb.apply(me, args)
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = dezhorse
  } else {
    window.dezhorse = dezhorse
  }
}())
