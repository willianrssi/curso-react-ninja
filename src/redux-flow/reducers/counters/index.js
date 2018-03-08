'use strict'
import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT } from './actions'

export const initialState = []

const counters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER :
      return state.concat(0)
    case REMOVE_COUNTER :
      return state.filter((counter, index) => action.index !== index)
    case INCREMENT :
      return state.map((counter, index) => action.index === index ? counter + 1 : counter)
    case DECREMENT :
      return state.map((counter, index) => action.index === index ? counter - 1 : counter)
  }
  return state
}

export default counters
