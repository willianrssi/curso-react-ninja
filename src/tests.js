'use strict'

console.assert(
  counter(0, {type: 'INCREMENT'}) === 1
)

console.assert(
  counter(4, {type: 'INCREMENT'}) === 5
)

console.assert(
  counter(1, {type: 'DECREMENT'}) === 0
)

console.assert(
  counter(5, {type: 'DECREMENT'}) === 4
)

console.assert(
  counter(undefined, {}) === 0
)

console.assert(
  counter(1, {type: 'ANYTHING'}) === 1
)