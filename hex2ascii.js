;(function(root) {
  'use strict'

  function hex2ascii (hex) {
    let str = ''

    if (!(typeof hex === 'number' || typeof hex == 'string')) {
      return str
    }

    hex = hex.toString().replace(/\s+/gi, '')

    for (let i = 0; i < hex.length; i += 2) {
      let n = parseInt(hex.substr(i, 2), 16)
      if (!isNaN(n) && n !== 0) {
        str += String.fromCharCode(n)
      }
    }

    return str
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = hex2ascii
    }
    exports.hex2ascii = hex2ascii
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return hex2ascii
    })
  } else {
    root.hex2ascii = hex2ascii
  }
})(this);
