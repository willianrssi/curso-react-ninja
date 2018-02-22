'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SaveMessage from 'components/save-message'

const stories = storiesOf('SaveMessage', module)

stories.add('save-message isSaving === null', () => (
  <div style={{background: '#CCC'}}>
    Mensagem:'<SaveMessage isSaving={null} />'
  </div>
))

stories.add('save-message isSaving === true', () => (
  <div style={{background: '#CCC'}}>
    Mensagem:'<SaveMessage isSaving />'
  </div>
))

stories.add('save-message isSaving === false', () => (
  <div style={{background: '#CCC'}}>
    Mensagem:'<SaveMessage isSaving={false} />'
  </div>
))
