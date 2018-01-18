'use strict'

const map = (arr = [], func = (item) => item) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('The first parameter must be an array')
  }

  if (typeof func !== 'function') {
    throw new TypeError('The second parameter must be a function')
  }

  return (function mapInternal (arrInternal, counter) {
    let [head, ...tail] = arrInternal

    return arrInternal.length === 0 ? []
    : [func(head, counter++, arr),
      ...mapInternal(tail, counter)]
  })(arr, 0)
}
export default map
