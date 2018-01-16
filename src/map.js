'use strict'

const map = (arr = [], func = (item) => item) => {
  return (function mapInternal (arrInternal, counter) {
    let [head, ...tail] = arrInternal

    return arrInternal.length === 0 ? []
    : [func(head, counter++, arr),
      ...mapInternal(tail, counter)]
  })(arr, 0)
}
export default map
