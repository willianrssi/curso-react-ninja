'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = ({children, onClick, kind}) => (
  <button className={`button ${kind ? '-' + kind : ''}`}onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  kind: PropTypes.oneOf(['success', 'danger'])
}

export default Button
