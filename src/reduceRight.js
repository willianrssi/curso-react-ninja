'use strict'
import reverse from './reverse'
import mainReduce from './main-reduce'

const reduceRight = (arr, ...params) => mainReduce(reverse(arr), ...params)

export default reduceRight
