'use strict'

const some = (arr, func) => {
  return (function someInternal (arrInternal, counter) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0 ? false
      : func(head, counter, arr) ? true
        : someInternal(tail, counter + 1)
  })(arr, 0)
}

export default some

// const some = (arr, func) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i], i, arr)) {
//       return true
//     }
//   }
//   return false
// }
