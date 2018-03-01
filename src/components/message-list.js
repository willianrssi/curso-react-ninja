'use strict'

import React from 'react'
import Message from 'components/message'
import WithContext from './with-context'

const MessageList = ({ messages }) => (
  <ul>
    {messages.map((message) => (
      <Message text={message.text} key={message.text} color={message.color} />
  ))}
  </ul>

)

export default WithContext(MessageList)
