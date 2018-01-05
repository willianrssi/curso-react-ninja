'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div className='container' >
        <Button handleClick={() =>
          console.log('clicou')
          }>
          Clica em mim
        </Button>
      </div>
    )
  }
}
export default App
