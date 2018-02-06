'use strict'

import { storiesOf } from '@kadira/storybook'
import React, { Component } from 'react'
import Title from './index.js'

const stories = storiesOf('<Title />', module)

stories.add('Without props ', () => (
  <Title>Main Title</Title>
))

stories.add('Title with async/await', () => {
  class App extends Component {
    constructor () {
      super()
      this.state = {
        title: '...'
      }
    }

    getTitle () {
      return new Promise((resolve, reject) => {
        this.timer = setTimeout(() => {
          resolve('My app with async/await')
        }, 2000)
      })
    }

    async componentDidMount () {
      try {
        this.setState({ title: await this.getTitle() })
      } catch (error) {
      }
    }

    componentWillUnmount () {
      clearTimeout(this.timer)
    }

    render () {
      return (
        <Title>{this.state.title}</Title>
      )
    }
  }
  return <App />
}
)
