'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Button from './index'

it('Should button success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='success'>
      Click me success
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should button danger to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='danger'>
      Click me success
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should button default to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} >
      Click me success
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Button with props kind="danger" should has class "-danger" ', () => {
  const wrapper = shallow(
    <Button onClick={() => null} kind='danger' >
      Click me success
    </Button>
  )
  expect(wrapper.hasClass('-danger')).toBe(true)
  expect(wrapper.hasClass('-success')).toBe(false)
})

it('Button with props kind="success" should has class "-success" ', () => {
  const wrapper = shallow(
    <Button onClick={() => null} kind='success' >
      Click me success
    </Button>
  )
  expect(wrapper.hasClass('-success')).toBe(true)
  expect(wrapper.hasClass('-danger')).toBe(false)
})
