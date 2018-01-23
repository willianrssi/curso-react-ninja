'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

storiesOf('Repos', module)

  .add('with title', () => (
    <Repos title='Favoritos' />
  ))

  .add('with title and repos', () => (
    <Repos title='Favoritos' repos={[{
      html_url: 'http://github.com/',
      name: 'willianrssi'
    }]} />
  ))
