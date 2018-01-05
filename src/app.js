'use strict'

import React from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'

const App = React.createClass({
  render: function () {
    return (
      <div className='container' >
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
})

export default App
