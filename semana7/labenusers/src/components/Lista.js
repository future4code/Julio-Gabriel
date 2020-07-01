import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ContainerLista = styled.div
`
border-bottom: 1px solid black;
width: 50vw;
display: flex;
justify-content: space-between;
align-items: center;
margin: 3vh;
`

const BotaoRemover = styled.button
`
color: red;
background-color: white;
border-style: none;
font-size: 16px;
font-weight: bold;
`

const BotaoEditar = styled.button
`
background-color: white;
color: green;
border-style: none;
font-size: 16px;
font-weight: bold;
`

const BotaoBusca = styled.div
`
background-color: blue;
color: white;
border-style: none;
width: 5vw;
height: 5vh;
display: flex;
justify-content: center;
align-items: center;
margin-left: 1vw;
font-weight: bold;
`

const BotaoVoltar = styled.button
`
background-color: red;
color: white;
border-style: none;
width: 5vw;
height: 5vh;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
`

const BotaoSalvar = styled.button
`
background-color: green;
color: white;
border-style: none;
width: 5vw;
height: 5vh;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
margin-top: 2vh;
`

const CaixaDePesquisa= styled.div
`
display: flex;
justify-content: center;
`
const EspacementoInputs = styled.span
`
margin-right: 1vw;
`

class Lista extends React.Component {

    state = {
        listaDeUsuarios: [],
        usuarioUnico: [],
        botaoEditarUsuario: false,
        renderizaDetalhesDoUsuario: false,
        idUser: "",
        inputNome: "",
        inputEmail: "",
        inputBusca: ""
    } 

   componentDidMount = () => {
        this.pegarListaDeUsuarios()
    } 

    pegarListaDeUsuarios = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "julio-gabriel-turing"
            }
        }).then((response) => {
            this.setState({listaDeUsuarios: response.data})
        }).catch((error) => {
            console.log(error.message)
        })
    }
    
    onClickApagarUsuario = (UsuarioId) => {

        if (window.confirm("Tem certeza de que deseja deletar?")) {

            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${UsuarioId}`, {
                headers: {
                    Authorization: "julio-gabriel-turing"
                }
            }).then((resposta) => {
                this.pegarListaDeUsuarios()
                this.setState({usuarioUnico: ""})
                alert("Usuário excluído com sucesso")
            }).catch((erro) => {
                alert("Usuário não excluído")
            }) 

        }
        
    }

    onClickAbrirDetalhesUsuarios = (UsuarioId) => {

        this.setState({ renderizaDetalhesDoUsuario: true, idUser: UsuarioId })

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${UsuarioId}`, {
            headers: {
                Authorization: "julio-gabriel-turing"
            }
        }).then((responde) => {
            this.setState({usuarioUnico: responde.data})
        }).catch((erro) => {
            console.log(erro.message)
            alert("Usuário não foi encontrado")
        })
    }

    onClickVoltar = () => {
        this.setState( { renderizaDetalhesDoUsuario: false } )
        this.pegarListaDeUsuarios()
    }

    onClickEditarUsuario = () => {
        this.setState( { botaoEditarUsuario: true} )
    }

    onClickSalvar = (idUser) => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`, body, {
            headers: {
                Authorization: "julio-gabriel-turing"
            }
        }).then((respon) => {
            this.setState({inputNome: "", inputEmail: "", botaoEditarUsuario: false})
            this.onClickAbrirDetalhesUsuarios(idUser)
            return alert("Usuário alterado com sucesso")
        }).catch((err) => {
            return alert("Usuário não foi alterado")
        })
    }

    onClickBuscar = () => {
        if (this.state.inputBusca !== "") {
            axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.inputBusca}`, {
                headers: {
                    Authorization: "julio-gabriel-turing"
            }
            }).then((res) => {
                this.setState({listaDeUsuarios: res.data, inputBusca: ""})
            }).catch((err) => {
                return alert(err.message)
            })   
        } else {
            this.pegarListaDeUsuarios()
        }     
    }

    onChangeNome = (event) => {
        this.setState({inputNome: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    onChangeBusca = (event) => {
        this.setState({inputBusca: event.target.value})
    }

  render () {

      if (this.state.renderizaDetalhesDoUsuario === false && this.state.botaoEditarUsuario === false) {
            return (
                <div>
                    <CaixaDePesquisa>
                        <input
                            type="text"
                            value={this.state.inputBusca}
                            onChange={this.onChangeBusca} 
                            placeholder="Digite aqui a sua busca"
                        />
                        <BotaoBusca onClick={this.onClickBuscar}>Buscar</BotaoBusca>
                    </CaixaDePesquisa>
                    {this.state.listaDeUsuarios.map(usuario => {
                        return <ContainerLista key={usuario.id}><p onClick={() => this.onClickAbrirDetalhesUsuarios(usuario.id)}>{usuario.name}</p> <BotaoRemover onClick={() => this.onClickApagarUsuario(usuario.id)}>X</BotaoRemover></ContainerLista>
                    })} 
                </div>
            )
      } else if (this.state.renderizaDetalhesDoUsuario === true && this.state.botaoEditarUsuario === false){
          return (
            <div>
                <ContainerLista> <p> Nome: {this.state.usuarioUnico.name} - Email: {this.state.usuarioUnico.email}</p> 
                    <div>
                        <BotaoRemover onClick={() => this.onClickApagarUsuario(this.state.usuarioUnico.id)}>X</BotaoRemover> 
                        <BotaoEditar onClick={() => this.onClickEditarUsuario(this.state.usuarioUnico.id)}>Editar</BotaoEditar> 
                    </div>
                </ContainerLista>
                <BotaoVoltar onClick={this.onClickVoltar}>Voltar</BotaoVoltar>
            </div>
          )
      } else if (this.state.renderizaDetalhesDoUsuario === true && this.state.botaoEditarUsuario === true) {
          return (
            <div>
              <div> 
                <EspacementoInputs>
                    <label>Nome:</label>
                    <input 
                    type="text"
                    value={this.state.inputNome}
                    onChange={this.onChangeNome}
                    />
                </EspacementoInputs>
                <EspacementoInputs>
                    <label>Email:</label>
                    <input 
                        type="email"
                        value={this.state.inputEmail}
                        onChange={this.onChangeEmail}
                    />
                </EspacementoInputs>
              </div>
              <BotaoSalvar onClick={() => this.onClickSalvar(this.state.idUser)}>Salvar</BotaoSalvar>
            </div>
          )
      }
  
  } 
}

export default Lista;