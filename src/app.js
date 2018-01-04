'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container' >
        <Title name='Willian' fullName={{ firstName: 'Willian', lastName: 'Rodrigues da Silva' }} />
        <label htmlFor='input'>Input</label>
        <input type='text' />
      </div>
    )
  }
})

export default App
