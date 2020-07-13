import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Home from './components/Home'
import Matches from './components/Matches'
import Header from './components/Header'

const ContainerGeral = styled.div
`
width: 100vw;
height: 100vh;
background: #d3d3d3;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
`

const Container = styled.div
`
width: 30vw;
height: 90vh;
border-radius: 5px;
border: 1px solid black;
background: white;
`

const BotaoLimpar = styled.button
`
position: absolute;
bottom: 5px;
right: 5px;
`

function App() {

  const [botaoMudaPagina, setBotaoMudaPagina] = useState(false)

  const onClickBotaoMudaPagina = () => {
    setBotaoMudaPagina(!botaoMudaPagina)
  }

  const renderizaNaTela = () => {
    if (!botaoMudaPagina) {
      return (
        <Home />
      )
    } else {
      return (
        <Matches />
      )
    }
  }

  return (
    <ContainerGeral>
      <Container>
        <Header
          botaoMuda={botaoMudaPagina} 
          botaoMatches={onClickBotaoMudaPagina}
        />
        {renderizaNaTela()}
      </Container>
      <BotaoLimpar>Limpar swipes e matches</BotaoLimpar>
    </ContainerGeral>
  )

}

export default App