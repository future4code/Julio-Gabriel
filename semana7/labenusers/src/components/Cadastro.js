import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const ContainerCadastro = styled.div
`
width: 30vw;
height: 30vh;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ContainerEntradas = styled.div
`
width: 15vw;
margin: 1vh 0vw;
display: flex;
`

const BotaoSalvar = styled.button
`
background-color: blue;
color: white;
border-style: none;
width: 10vw;
height: 5vh;
font-size: 16px;
`

class Cadastro extends React.Component {

  state = {
    inputNomeValue: "",
    inputEmailValue: ""
  }

  onChangeInputNomeValue = (event) => {
    this.setState({inputNomeValue: event.target.value})
  }
  
  onChangeInputEmailValue = (event) => {
      this.setState({inputEmailValue: event.target.value})
  }

  criarUsuários = () => {
      const body = {
        name: this.state.inputNomeValue,
        email: this.state.inputEmailValue
      }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
          headers: {
              Authorization: "julio-gabriel-turing"
          }
      })
      .then((response) => {
        this.setState({inputNomeValue: ""})  
        this.setState({inputEmailValue: ""})
        return alert("Usuário cadastrado com sucesso")
      })
      .catch((error) => {
        return alert("Usuário não foi cadastrado")
      })
  }

  render () {

    return (
      <ContainerCadastro>
        <ContainerEntradas>
            <label>Nome:</label>
            <input type="text" value={this.state.inputNomeValue} onChange={this.onChangeInputNomeValue}></input>
        </ContainerEntradas>
        <ContainerEntradas>
            <label>Email:</label>
            <input type="text" value={this.state.inputEmailValue} onChange={this.onChangeInputEmailValue}></input>
        </ContainerEntradas>
        <BotaoSalvar onClick={this.criarUsuários}>Salvar</BotaoSalvar>
      </ContainerCadastro>
    )
  } 
}

export default Cadastro;