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
  height: 3vh;
  margin: 2vh 0vw;
`

class Etapa1 extends React.Component {

    state = {
        valorInputNome: "",
        valorInputIdade: "",
        valorInputEmail: "",
        valorInputSelecao: "valor1",
    }

    onChangeInputNome = (event) => {
        this.setState({ valorInputNome: event.target.value })
    }

    onChangeInputIdade = (event) => {
        this.setState({ valorInputIdade: event.target.value })
    }

    onChangeInputEmail = (event) => {
        this.setState({ valorInputEmail: event.target.value })
    }

    onChangeInputSelecao = (event) => {
        this.setState({ valorInputSelecao: event.target.value })
    }

    render() {

        return (

            <DivJanela>

                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <label>1. Qual o seu nome?</label>
                <TextBox value={this.state.valorInputNome}
                onChange={this.onChangeInputNome}></TextBox>

                <label>2. Qual sua idade?</label>
                <TextBox value={this.state.valorInputIdade}
                onChange={this.onChangeInputIdade}></TextBox>

                <label>3. Qual seu email?</label>
                <TextBox value={this.state.valorInputEmail}
                onChange={this.onChangeInputEmail}></TextBox>

                <label>4. Qual a sua escolaridade?</label>
                <SelectBox value={this.state.valorInputSelecao} onChange={this.onChangeInputSelecao} name="select">
                    <option value="valor1" defaultValue>Ensino Médio Incompleto</option> 
                    <option value="valor2">Ensino Médio Completo</option>
                    <option value="valor3">Ensino Superior Incompleto</option>
                    <option value="valor4">Ensino Superior Completo</option>
                </SelectBox>
      
            </DivJanela>
        )

    }
}

export default Etapa1;