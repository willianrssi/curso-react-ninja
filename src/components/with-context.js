'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const withContext = (Wraper) => {
  class WithContext extends PureComponent {

    componentDidMount () {
      this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount () {
      this.unsubscribe()
    }

    render () {
      return (
        <Wraper {...this.props} {...this.context} />
      )
    }

  }

  WithContext.contextTypes = {
    store: PropTypes.object
  }

  return WithContext
}

export default withContext
