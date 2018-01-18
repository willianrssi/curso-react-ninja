'use strict'

import mainReduce from './main-reduce'

const reduce = mainReduce

export default reduce

// const reduce = (arr, func, initialValue) => {
//   let accValue = initialValue
//   let arrCopy = arr

//   if (initialValue === undefined) {
//     accValue = arr[0]
//     arrCopy = arr.slice(1)
//   }
//   for (let i = 0; i < arrCopy.length; i++) {
//     accValue = func(accValue, arrCopy[i], i, arrCopy)
//   }

//   return accValue
// }
