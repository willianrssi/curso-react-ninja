'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Action from './index'

storiesOf('Actions', module)

.add('Action Components', () => (
  <Action
    getRepos={action('Get Repos')}
    getStarred={action('Get Starred')} />
))
