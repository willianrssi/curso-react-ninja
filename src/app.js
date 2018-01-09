'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Controlled input text',
      checked: false,
      valueSelect: '2',
      textareaValue: 'controlled textarea',
      showContent: false,
      checkboxShowContent: false
    }
  }

  render () {
    return (
      <div className='container' >

        <form onSubmit={(e) => {
          e.preventDefault()
          console.log('e', e)
        }}>

          {/* input text is a controlled component */}
          <input type='text' value={this.state.value} onChange={(e) =>
            this.setState({ value: e.target.value })
          } />

          <br />

          {/* input text is an uncontrolled component */}
          <input type='text' defaultValue='Uncontrolled input text' />

          <br />

          {/* chechbox is a controlled component */}
          <label>
            <input type='checkbox' checked={this.state.check} onChange={(e) =>
              this.setState({ checked: e.target.checked })} />
            Checkbox
        </label>

          {/* radio is an uncontrolled component */}
          <input type='radio' name='rd' value='1' defaultChecked />Radio1
        <input type='radio' name='rd' value='2' />Radio2

        <br />

          {/* select and option are a controlled component */}
          <select value={this.state.valueSelect} onChange={(e) =>
            this.setState({ valueSelect: e.target.value })}>
            <option value='1'>Opção 1</option>
            <option value='2'>Opção 2</option>
            <option value='3'>Opção 3</option>
          </select>

          <br />

          {/* textarea is a controlled component */}
          <textarea value={this.state.textareaValue} style={{ resize: 'none' }} onChange={(e) =>
            this.setState({ textareaValue: e.target.value })} />

          <br />

          <br />

          <br />

          <input type='checkbox' checked={this.state.checkboxShowContent} onChange={() =>
            this.setState({checkboxShowContent: !this.state.checkboxShowContent},
            () => {
              this.setState({showContent: this.state.checkboxShowContent})
            })
          } />

          {this.state.showContent && <div>Olha eu Aqui </div> }

          <input type='submit' />
        </form>
      </div>
    )
  }
}
export default App
