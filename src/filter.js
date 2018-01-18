'use strict'

const filter = (arr = [], func = (item) => item) => {
  return (function filterInternal (arrInternal, counter) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0 ? []
    : (func(head, counter, arr) ? [head] : []).concat(filterInternal(tail, counter + 1))
  })(arr, 0)
}

export default filter

// const filter = (arr = [], func = (item) => item) => {
//   let newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i], i, arr)) {
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }
