'use strict'

import React from 'react'
import Title from './title'
import Square from './square'

class App extends React.Component {
  render () {
    return (

      <div className='container' onClick={(e) => {
        alert('Clicouuuuuu')
      }} >

        <Title name='Willian' fullName={{ firstName: 'Willian', lastName: 'Rodrigues' }} />

        {['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}

        {['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}

      </div>
    )
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container' >
//         <Square />
//       </div>
//     )
//   }
// })

export default App
