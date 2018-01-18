'use strict'

const mainReduce = (arr, func, initialValue) => {
  const arrCopy = initialValue === undefined ? arr.slice(1) : arr
  const accValue = initialValue === undefined ? arr[0] : initialValue

  return (function reduceInternal (accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0 ? accInternal
    : reduceInternal(func(accInternal, head, counter, arrCopy), tail, counter + 1)
  })(accValue, arrCopy, 0)
}

export default mainReduce
