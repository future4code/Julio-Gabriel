import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Details from './Details'

const ContainerPlaylist = styled.div
`
width: 31.5vw;
display: flex;
flex-direction: column;
justify-content: center;
`

const Teste = styled.li
`
padding: 1px;
`

const BotaoMinimizarPlaylist = styled.div
`
width: 10vw;
height: 6vh;
background-color: green;
color: white;
border-style: none;
font-size: 12px;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
margin-top: 3vh;
`

const BotaoRemover = styled.button
`
width: 5vw;
height: 3vh;
background-color: red;
color: white;
font-weight: bold;
border-style: none;
`

const BotaoMaisDetalhes = styled.button
`
width: 5vw;
height: 3vh;
background-color: green;
color: white;
font-weight: bold;
border-style: none;
`

const ListaDePlaylist = styled.ul
`
margin: 0px;
padding: 0px;
list-style: none;
`

class Playlists extends React.Component {

    state = {
        playlists: [],
        moreDetails: false,
        idDaPlaylist: "",
        nomeDaPlaylist: ""
    }

    componentDidMount = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: "julio-gabriel-turing"
            }
        }).then((response) => {
            this.setState({playlists: response.data.result.list}) 
        }).catch((error) => {
            console.log(error.message)
        })
    }

    componentDidUpdate = () => {
        this.componentDidMount()
    }

    onClickRemoverPlaylist = (Identificador) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${Identificador}`, {
            headers: {
                Authorization: "julio-gabriel-turing"
            }
        }).then((response) => {
            this.componentDidMount()
            return alert("Playlist removida com sucesso")
        }).catch((error) => {
            console.log(error.mesage)
        })
    }

    onClickMoreDetails = (Chave, Nome) => {
        this.setState({moreDetails: !this.state.moreDetails, idDaPlaylist: Chave, nomeDaPlaylist: Nome})
    }

    onClickVoltar = () => {
        this.setState({moreDetails: !this.state.moreDetails})
    }

    render () {

        const renderizaNaTela = () => {
            if (this.state.moreDetails === false) {
                return (
                    <ContainerPlaylist>
                        <h3>Suas playlist</h3>
                        <ListaDePlaylist>
                            {this.state.playlists.map((playlist) => {
                                return <Teste key={playlist.id}>{playlist.name} <BotaoRemover onClick={() => this.onClickRemoverPlaylist(playlist.id)}>Remover</BotaoRemover> <BotaoMaisDetalhes onClick={() => this.onClickMoreDetails(playlist.id, playlist.name)}>Detalhes</BotaoMaisDetalhes></Teste>
                            })}
                        </ListaDePlaylist>
                        <BotaoMinimizarPlaylist onClick={this.props.minimizarPlaylists}>MINIMIZAR PLAYLIST</BotaoMinimizarPlaylist>
                    </ContainerPlaylist>
                )
            } else {
                return <Details 
                    voltarPlaylists={this.onClickVoltar}
                    chaveDaPlaylist={this.state.idDaPlaylist}
                    nameOfPlaylist={this.state.nomeDaPlaylist}
                />
            }
        }

        return (

            <div>
                {renderizaNaTela()}
            </div>
        )

    }

}

export default Playlists