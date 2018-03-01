'use strict'

import React from 'react'
import WithContext from './with-context'

const Message = ({text, store, color}) => (
  <li style={{ background: store.color }}>
    {text}
    <button onClick={store.setColor(color)}>Change Color </button>
  </li>
)

export default WithContext(Message)
