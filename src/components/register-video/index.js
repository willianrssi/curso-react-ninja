'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'
import { closeRegisterVideo } from 'reducers/ui/action-creators'

const RegisterVideo = ({onSubmit, handleCloseRegisterVideo}) => (
  <Form onSubmit={onSubmit} >
    <h2> Cadastrar Vídeo </h2>

    <label htmlFor='id'>Id do Vídeo</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Título do Vídeo:</label>
    <input type='text' id='title' name='title' />

    <button type='submit' >Adicionar Vídeo </button>

    <ButtonClose onClick={handleCloseRegisterVideo} type='button'>&times;</ButtonClose>

  </Form>
)

const Form = styled.form`
  padding: 10px;
  position: relative;
`

const ButtonClose = styled.button`
  border-radius: 50%;
  font-size: 20px;
  height: 30px;
  line-height: 1;
  position: absolute;
  padding: 0;
  right: 10px;
  top: 10px;
  margim: 0;
  width: 30px;
  `

const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()

    const {
      id: {value: id},
      title: {value: title}
    } = e.target

    await dispatch(registerVideo({id, title}))

    e.target.reset()
    e.target[0].focus()
  },
  handleCloseRegisterVideo: () => {
    dispatch(closeRegisterVideo())
  }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
