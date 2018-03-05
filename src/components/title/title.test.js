'use strict'

import React from 'react'
import Title from './index'
import renderer from 'react-test-renderer'

it('Should Title to match snapshot', () => {
  const tree = renderer.create(<Title> Título </Title>).toJSON()
  expect(tree).toMatchSnapshot()
})
