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

const SelectBox = styled.select
`
  width: 20vw;
`

class Etapa3 extends React.Component {

    state = {
        valorInputGraduacao: "",
        valorInputSelecao: "valor1",
    }

    onChangeInputGraduacao = (event) => {
        this.setState({ valorInputGraduacao: event.target.value })
    }

    onChangeInputSelecao = (event) => {
        this.setState({ valorInputSelecao: event.target.value })
    }

    render() {

        return (

            <DivJanela>

                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                <label>5. Por que você não terminou um curso de graduação?</label>
                <TextBox value={this.state.valorInputGraduacao}
                onChange={this.onChangeInputGraduacao}></TextBox>

                <label>6. Você fez algum curso complementar?</label>
                <SelectBox value={this.state.valorInputSelecao} onChange={this.onChangeInputSelecao} name="select">
                    <option value="valor1" defaultValue>Nenhum</option> 
                    <option value="valor2">Curso Técnico</option>
                    <option value="valor3">Curso de Inglês</option>
                </SelectBox>
      
            </DivJanela>
        )

    }
}

export default Etapa3;