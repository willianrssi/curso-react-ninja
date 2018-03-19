'use strict'

import { SUCCESS, FETCHING } from './actions'
import axios from 'axios'

export const fetchAddress = (cep) => (dispatch, getState) => {
  dispatch({
    type: FETCHING
  })
  axios.get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`).then(
    (response) => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
}
