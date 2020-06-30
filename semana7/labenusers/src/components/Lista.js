import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ContainerLista = styled.div
`
border-bottom: 1px solid black;
width: 20vw;
display: flex;
justify-content: space-between;
margin: 3vh;
`

class Lista extends React.Component {

    state = {
        listaDeUsuarios: []
    } 

   componentDidMount = () => {
        this.pegarListaDeUsuarios()
    } 

    pegarListaDeUsuarios = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "julio-gabriel-turing"
            }
        })
        .then((response) => {
            this.setState({listaDeUsuarios: response.data})
        })
        .catch((error) => {
            console.log(error.data)
        })
    }
    
    onClickApagarUsuario = (UsuarioId) => {

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${UsuarioId}`, {
            headers: {
                Authorization: "julio-gabriel-turing"
            }
        })
        .then((resposta) => {
            this.pegarListaDeUsuarios()
            alert("Usuário excluído com sucesso")
        })
        .catch((erro) => {
            alert("Usuário não excluído")
        })

    }

  render () {

    return (
      <div>
          {this.state.listaDeUsuarios.map(usuario => {
              return <ContainerLista key={usuario.id}>{usuario.name} <button onClick={() => this.onClickApagarUsuario(usuario.id)}>Remover</button></ContainerLista>
          })}
      </div>
    )
  } 
}

export default Lista;