'use strict'

import React, { PropTypes } from 'react'

const Search = ({ isDisable, handleSearch }) => (
  <div className='search'>
    <input
      disabled={isDisable}
      type='text'
      placeholder='Digite o nome do usuário'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired
}

export default Search
