'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { openRegisterVideo } from 'reducers/ui/action-creators'
import { headerHeight } from 'utils/constants'

const MainHeader = ({handleOpenRegisterVideo}) => (
  <Header>
    <HeaderTitle>ReactFlix</HeaderTitle>
    <RegisterButton onClick={handleOpenRegisterVideo} >Cadastrar Vídeo</RegisterButton>
  </Header>
)

const Header = styled.header`
  align-items: center;
  background: #333;
  display: flex;
  justify-content: space-between;
  height: ${headerHeight};
  padding: 0 10px
`

const HeaderTitle = styled.h1`
  color: #FFF
  margin-bottom: 0;
`

const RegisterButton = styled.button`
  margin-bottom: 0;
`

const mapDispatchToProps = (dispatch) => ({
  handleOpenRegisterVideo: () =>
  dispatch(openRegisterVideo())
})

export default connect(null, mapDispatchToProps)(MainHeader)
