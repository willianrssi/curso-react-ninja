'use strict'

const reverse = (arr) => {
  return arr.length === 0 ? []
    : [arr.slice(-1)[0],
      ...reverse(arr.slice(0, -1))]
}

export default reverse

// const reverse = (arr) => {
//   let newArr = []
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i])
//   }
//   return newArr
// }
