'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination />', module)

stories.add('without props', () => (
  <Pagination />
))

stories.add('with total and active pages', () => (
  <Pagination total={6} activePage={3} />
))

stories.add('with pageLink', () => (
  <Pagination total={15} activePage={7} pageLink='http://mypage.com/page/%page%' />
))

stories.add('with callBack', () => (
  <Pagination total={10} activePage={5} pageLink='http://mypage.com/page/%page%' onClick={(page) => window.alert(page)} />
))

