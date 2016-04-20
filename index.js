;(function () {
  'use strict'

  function dezorse (cb, next) {
    var asap = next || setTimeout
    var sync = true
    asap(function () {
      sync = false
    })

    return function zorseSafe () {
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
    module.exports = dezorse
  } else {
    window.dezorse = dezorse
  }
}())
