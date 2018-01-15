'use strict'

const map = (arr = [], func = (item) => item) => {
  let newArr = []

  arr.forEach((item, i, arr) => {
    newArr.push(func(item, i, arr))
  })

  return newArr
}

export default map
