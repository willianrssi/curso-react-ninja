'use strict'

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibility-filter'
import address from './address'

export default combineReducers({
  address,
  todos,
  visibilityFilter
})
