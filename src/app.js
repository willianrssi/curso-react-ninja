'use strict'

import React, { Component } from 'react'
import { v4 } from 'node-uuid'
import MarkdownEditor from 'views/markdown-editor'
import marked from 'marked'

import './css/style.css'

 // eslint-disable-next-line
import('highlight.js').then((hljs) => { 
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()

    this.clearState = () => ({
      value: '',
      title: '',
      id: v4()
    })

    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.getMarkup = () => {
      return {__html: marked(this.state.value)}
    }

    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        this.setState({
          isSaving: false,
          files: {
            ...this.state.files,
            [this.state.id]: {
              title: this.state.title || 'Sem Título',
              content: this.state.value}
          }
        })
        localStorage.setItem('markdown-editor', JSON.stringify(this.state.files))
      }
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleRemove = () => {
      // let files = Object.keys(this.state.files).reduce((acc, fileId) => {
        //   return fileId === this.state.id ? acc :
        //   {
          //     ...acc,
          //     [fileId]: this.state.files[fileId]
          //   }
          // }, {})
          // eslint-disable-next-line no-unused-vars
      const {[this.state.id]: id, ...files} = this.state.files
      this.setState({files})
      localStorage.setItem('markdown-editor', JSON.stringify(this.state.files))
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        title: this.state.files[fileId].title,
        value: this.state.files[fileId].content,
        id: fileId
      })
    }
  }

  componentDidUpdate () {
    clearTimeout(this.timer)
    this.timer = setTimeout(this.handleSave, 300)
  }

  componentUnmount () {
    clearTimeout(this.timer)
  }

  componentDidMount () {
    const files = JSON.parse(localStorage.getItem('markdown-editor'))
    this.setState({
      files: files
    })
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        isSaving={this.state.isSaving}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        textareaRef={this.textareaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
        title={this.state.title} />
    )
  }
}
export default App
