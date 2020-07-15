import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from './components/Header'
import Home from './components/Home'
import Matches from './components/Matches'

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
  const [atualizaMatches, setAtualizaMatches] = useState(false)

  const onClickBotaoMudaPagina = () => {
    setBotaoMudaPagina(!botaoMudaPagina)
  }

  const onClickLimpaTudo = () => {
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julio-gabriel-turing/clear`,)
    .then((response) => {
      setAtualizaMatches(true)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  const renderizaNaTela = () => {
    if (!botaoMudaPagina) {
      return (
        <Home />
      )
    } else {
      return (
        <Matches 
          atualizaEstado={atualizaMatches}
        />
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
      <BotaoLimpar onClick={onClickLimpaTudo}>Limpar swipes e matches</BotaoLimpar>
    </ContainerGeral>
  )

}

export default App