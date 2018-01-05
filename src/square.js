'use strict'

import React from 'react'

const Square = ({ color }) => (
  <div style={{
    background: color,
    width: '100px',
    height: '100px'
  }} />
)

Square.defaultProps = {
  color: 'black'
}

export default Square
