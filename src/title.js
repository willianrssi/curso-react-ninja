'use strict'

import React from 'react'

const Title = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'Visitante',
      age: '(idade não informada)'
    }
  },
  render: function () {
    return (
      <h1>
        Olá {this.props.name +
          ' seu nome completo é: ' + this.props.fullName.firstName + ' ' + this.props.fullName.lastName +
          ' e sua idade é ' + this.props.age }
      </h1>
    )
  }
})

export default Title
