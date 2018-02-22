'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({ title, isSaving, handleRemove, handleCreate, handleChange }) => (
  <header className='editor-header'>

    <input onChange={handleChange('title')} type='text' value={title} placeholder='Sem Título' />

    <SaveMessage isSaving={isSaving} />

    <Button kind='success' onClick={handleCreate}> Criar Novo </Button>

    <Button kind='danger' onClick={handleRemove}> Remover </Button>

  </header>
)

MarkdownEditorHeader.propTypes = {
  title: PropTypes.string,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
