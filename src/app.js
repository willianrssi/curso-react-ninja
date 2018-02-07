'use strict'

import React, { Component } from 'react'
import './css/style.css'

// import Title from 'components/title'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: '...',
      Component: 'div'
    }
  }

  getTitle () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('My app with async/await')
      }, 2000)
    })
  }

  async componentDidMount () {
    const title = await import('components/title')

    try {
      this.setState({
        title: await this.getTitle(),
        Component: title.default
      })
    } catch (error) {
    }
  }

  render () {
    return (
      <this.state.Component>{this.state.title}</this.state.Component>
    )
  }
}
export default App
