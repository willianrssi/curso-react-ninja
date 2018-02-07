'use strict'

import React, { Component } from 'react'
import './css/style.css'

// import Title from 'components/title'

class App extends Component {
  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }

  incrementCounter (state) {
    return {counter: state.counter + 1}
  }

  componentDidMount () {
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
  }

  render () {
    console.log('render:' + this.state.counter)
    return (
      <div>counter: {this.state.counter}</div>
    )
  }
}
export default App
