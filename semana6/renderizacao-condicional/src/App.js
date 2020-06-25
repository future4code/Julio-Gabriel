import React from 'react';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import styled from 'styled-components'

const DivMestre = styled.div
`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
const FormatButton = styled.button
`
  width: 10vw;
  height: 5vh;
  background-color: blue;
  color: white;
  border-style: none;
`

class App extends React.Component {

  state = {

    paginaAtual: 0

  }

  avancaPagina = (paginaAtual) => {

    this.setState({paginaAtual: this.state.paginaAtual + 1})

  }

  render () {

    if (this.state.paginaAtual === 0) {
      return (
        <DivMestre>
          <Etapa1 />
          <FormatButton onClick={this.avancaPagina}>PRÓXIMA ETAPA</FormatButton>
        </DivMestre>
      )
    } else if (this.state.paginaAtual === 1) {
      return (
        <DivMestre>
          <Etapa2 />
          <FormatButton onClick={this.avancaPagina}>PRÓXIMA ETAPA</FormatButton>
        </DivMestre>
      )
    } else if (this.state.paginaAtual === 2) {
      return (
        <DivMestre>
          <Etapa3 />
          <FormatButton onClick={this.avancaPagina}>PRÓXIMA ETAPA</FormatButton>
        </DivMestre>
      )
    } else if (this.state.paginaAtual === 3) {
     return (
        <DivMestre>
          <Final />
        </DivMestre>
     )
    }

  }

}

export default App;
