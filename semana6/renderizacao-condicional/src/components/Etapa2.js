import React from 'react';
import styled from 'styled-components'

const DivJanela = styled.div
`
  height: 60vh;
  display: flex;
  flex-direction: column;
`
const TextBox = styled.input
`
  width: 30vw;
  height: 3vh;
  margin: 2vh 0vw;
`

class Etapa1 extends React.Component {

    state = {
        valorInputCurso: "",
        valorInputUnidadeDeEnsino: "",
    }

    onChangeInputCurso = (event) => {
        this.setState({ valorInputCurso: event.target.value })
    }

    onChangeInputUnidadeDeEnsino = (event) => {
        this.setState({ valorInputUnidadeDeEnsino: event.target.value })
    }

    render() {

        return (

            <DivJanela>

                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <label>5. Qual curso?</label>
                <TextBox value={this.state.valorInputCurso}
                onChange={this.onChangeInputCurso}></TextBox>

                <label>6. Qual a unidade de ensino?</label>
                <TextBox value={this.state.valorInputUnidadeDeEnsino}
                onChange={this.onChangeInputUnidadeDeEnsino}></TextBox>
      
            </DivJanela>
        )

    }
}

export default Etapa1;