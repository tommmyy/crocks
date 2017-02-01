/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const isFunction = require('../predicates/isFunction')
const isType = require('../internal/isType')
const identity = require('../combinators/identity')

const Pair = require('../crocks/Pair')

function first(m) {
  if(isFunction(m)) {
    return function(x) {
      if(!(x && isType(Pair.type(), x))) {
        throw new TypeError('first: Pair required as input')
      }

      return x.bimap(m, identity)
    }
  } else if(m && isFunction(m.first)) {
    return m.first()
  } else {
    throw new TypeError('first: Arrow, Function or Star required')
  }
}

module.exports = first
