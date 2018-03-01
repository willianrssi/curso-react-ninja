'use strict'

import React, { PureComponent } from 'react'
import MessageList from 'components/message-list'
import PropTypes from 'prop-types'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()

    let subscriptions = []

    const subscribe = (f) => {
      subscriptions.push(f)
      return () => {
        subscriptions = subscriptions.filter((func) => func !== f)
      }
    }

    const setColor = (color) => (e) => {
      this.store.color = color
      subscriptions.forEach(f => f())
    }

    this.store = {
      color: 'purple',
      setColor,
      subscribe
    }
  }

  getChildContext () {
    return {
      store: this.store
    }
  }

  render () {
    return (
      <MessageList
        messages={[
          {text: 'hey', color: 'lightblue'},
          {text: 'ho', color: 'lightgreen'},
          {text: 'let\'s go', color: 'lightcoral'}
        ]
        }
      />
    )
  }
}

App.childContextTypes = {
  store: PropTypes.object
}
export default App
