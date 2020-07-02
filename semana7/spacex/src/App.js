import React from 'react'
import styled from 'styled-components'
import Detalhes from './components/Detalhes'
import Missoes from './components/Missoes'

const Container = styled.div
`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ContainerPaiDoMissoes = styled.div
`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 98vw;
min-height: 100vh;
`

class App extends React.Component {

  state = {
    moreDetails: false,
    idMission: ""
  }

  handleClickMoreDetails = (identificador) => {
    this.setState({moreDetails: !this.state.moreDetails})
    this.setState({idMission: identificador})
  }

  render () {

      const renderizaNatela = () => {
        if (!this.state.moreDetails) {
          return (
            <ContainerPaiDoMissoes>
              <Missoes 
                maisDetalhes={this.handleClickMoreDetails}
              />
            </ContainerPaiDoMissoes>
          )
        } else {
          return (
              <Detalhes 
                maisDetalhes={this.handleClickMoreDetails}
                idDaMissao={this.state.idMission}
              />
          )
        }
      }

        return (
          <Container>
              <h2>MISSÕES DA SPACEX</h2>
              {renderizaNatela()}
          </Container>
        ) 

  }

}

export default App;