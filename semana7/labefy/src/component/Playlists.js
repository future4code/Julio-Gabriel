import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Details from './Details'

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
                    <div>
                        <ul>
                            {this.state.playlists.map((playlist) => {
                                return <div key={playlist.id}>{playlist.name} <button onClick={() => this.onClickRemoverPlaylist(playlist.id)}>Remover</button> <button onClick={() => this.onClickMoreDetails(playlist.id, playlist.name)}>Mais Detalhes</button></div>
                            })}
                        </ul>
                        <BotaoMinimizarPlaylist onClick={this.props.minimizarPlaylists}>MINIMIZAR PLAYLIST</BotaoMinimizarPlaylist>
                    </div>
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