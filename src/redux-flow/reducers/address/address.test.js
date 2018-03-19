'use strict'

import { expect } from 'chai'
import address from './index'
import deepFreeze from 'deep-freeze'
import { SUCCESS, FETCHING } from './actions'

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  })

  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      address: 'Servidão do Araçá-Rosa',
      city: 'Florianópolis',
      code: '88049-495',
      district: 'Tapera',
      state: 'SC',
      status: 1
    }
  })

  const after = {
    address: 'Servidão do Araçá-Rosa',
    city: 'Florianópolis',
    code: '88049-495',
    district: 'Tapera',
    state: 'SC',
    status: 1,
    isFetching: false
  }

  expect(address(before, action)).to.be.deep.equal(after)
})

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFetching: false
  })
  const action = deepFreeze({type: FETCHING})
  const after = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFetching: true
  }
  expect(address(before, action)).to.be.deep.equal(after)
})
