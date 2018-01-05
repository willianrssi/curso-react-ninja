'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
  }

  componentDidMount () {
    console.log('TIMER component Did Mounted')
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    console.log('TIMER will Unmount')
    clearInterval(this.timer)
  }

  componentWillReceiveProps (nextProps) {
    console.log('TIMER RECEIVE PROPS', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('TIMER should component Update', nextProps, nextState)
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('TIMER will update', this.props, nextProps)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('TIME did update', this.state, prevState)
  }

  render () {
    return (
      <div>
        Timer: {this.state.time}
      </div>
    )
  }
}

export default Timer
