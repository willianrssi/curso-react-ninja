'use strict'

import ui from './ui'
import videos from './videos'
import videoSingle from './video-single'
import { combineReducers } from 'redux'

export default combineReducers({
  ui,
  videos,
  videoSingle
})
