'use strict'

import React, { Component } from 'react'
import Timer from './timer'
import Button from './button'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showTimer: 'true',
      time: 0
    }
  }

  componentWillMount () {
    console.log('APP component will mount ')
  }

  componentDidMount () {
    console.log('APP DID mount')
  }

  render () {
    console.log('APP render')
    return (
      <div className='container' >

        {this.state.showTimer && <Timer time={this.state.time} />}

        <Button handleClick={() =>
          this.setState({ showTimer: !this.state.showTimer })
        } >show/hide timer
        </Button>

        <Button handleClick={() =>
          this.setState({ time: this.state.time + 10 })
        }>
          Change Props
        </Button>

      </div>
    )
  }
}
export default App
