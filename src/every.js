'use strict'

const every = (arr, func) => {
  return (function internalEvery (arrInternal, counter) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0 ? true
      : func(head, counter, arr) ? internalEvery(tail, counter + 1)
        : false
  })(arr, 0)
}

export default every

// const every = (arr, func) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (!func(arr[i], i, arr)) {
//       return false
//     }
//   }
//   return true
// }
