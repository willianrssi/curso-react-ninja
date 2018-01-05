'use strict'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'black'
    }
  }
  render () {
    return (
      <div className='container' >
        <Square color={this.state.color} />

        {['red', 'green', 'blue'].map((color) => (
          <Button
            key={color}
            handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        )
        )}
      </div>
    )
  }
}
export default App
