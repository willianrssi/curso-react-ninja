'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import App from './app'
import { createStore } from 'redux'
import reducer from 'reducers'

const store = createStore(reducer)

store.subscribe(() => {
  console.log('state:', store.getState())
})

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
