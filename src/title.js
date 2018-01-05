'use strict'

import React from 'react'

// Renderizando utilizando pure function
const Title = (props) => (
  <h1>{ `Olá ${props.name} seu nome completo é : ${props.fullName.firstName} ${props.fullName.lastName} e sua idade é ${props.age} `}</h1>
)

Title.defaultProps = {
  age: 1000
}
// Renderizando utilizando createReactClass
// const Title = React.createClass({

//   getDefaultProps: function () {
//     return {
//       name: 'Visitante',
//       age: '(idade não informada)'
//     }
//   },
//   render: function () {
//     return (
//       <h1>
//         Olá {this.props.name +
//           ' seu nome completo é: ' + this.props.fullName.firstName + ' ' + this.props.fullName.lastName +
//           ' e sua idade é ' + this.props.age }
//       </h1>
//     )
//   }
// })

export default Title
