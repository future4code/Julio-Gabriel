import React from 'react';
import Cadastro from './components/Cadastro';
import Lista from './components/Lista';
import styled from 'styled-components';

const Container = styled.div
`
margin: 3vh;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const BotaoPaginaSelecionada = styled.button
`
width: 15vw;
margin-bottom: 10vh;
`

class App extends React.Component {

  state = {
    paginaSelecionada: true,
    mensagemBotao: "lista"
  }

  selecionaPagina = () => {
    this.setState({paginaSelecionada: !this.state.paginaSelecionada})
    this.mudaEstadoBotao(this.state.paginaSelecionada)
  }

  mudaEstadoBotao = (paginaSelecionada) => {
    if (paginaSelecionada === true) {
      this.setState({mensagemBotao: "registro"})
    } else {
      this.setState({mensagemBotao: "lista"})
    }
  }

  render () {

    const renderiza = () => {
      if (this.state.paginaSelecionada === true) {
        return <Cadastro />
      } else {
        return <Lista />
      }
    }

    return (
      <Container>
        <BotaoPaginaSelecionada onClick={this.selecionaPagina}>Ir para a página de {this.state.mensagemBotao}</BotaoPaginaSelecionada>
        {renderiza()}
      </Container>
    )
  } 
}

export default App;
