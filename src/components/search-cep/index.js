'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from 'reducers/address/actions-creator'

export const SearchCep = ({address, city, code, district, state, status, isFetching, handleSearchCep}) => (
  <div>
    <form onSubmit={handleSearchCep}>
      <input type='text' name='cep' />
      <button disabled={isFetching} type='submit'>
        {isFetching ? '...Buscando' : 'Buscar Endereço '}</button>
    </form>
    {status === 0 && (<div>CEP não encontrado!!!</div>)}

    {status === 1 && (<table>
      <thead>
        <tr>
          <th>CEP</th>
          <th>Endereço</th>
          <th>Bairro</th>
          <th>Estado</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{code}</td>
          <td>{address}</td>
          <td>{district}</td>
          <td>{state}</td>
          <td>{city}</td>
        </tr>
      </tbody>
    </table>)}
  </div>
)

const mapStateToProps = (state) => state.address

const mapDispatchToProps = (dispatch) => ({
  handleSearchCep: (e) => {
    e.preventDefault()
    dispatch(fetchAddress(e.target.cep.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCep)
