import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerCadastrarMusicas = styled.div 
`
width: 50vw;
min-height: 60vh; 
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
`

const CamposDeEntradasDeDados = styled.div
`
display: flex;
flex-direction: column;
margin: 2vh;
`

const CampoDeSelecao = styled.select
`
width: 21vw;
`

const BotaoAdicionaMusica = styled.button
`
width: 10vw;
height: 6vh;
background-color: green;
color: white;
border-style: none;
font-size: 12px;
font-weight: bold;
margin-top: 2vh;
`

const InputDeDados = styled.input
`
width: 20vw;
height: 5vh;
`

class Music extends React.Component {

    state = {
        nomeDaMusica: "",
        nomeDoArtista: "",
        linkDaMusica: "",
        playlistSelecionada: "",
        selecionaPlaylist: []
    }

    componentDidMount = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "julio-gabriel-turing"
            }
        }).then((response) => {
            this.setState({selecionaPlaylist: response.data.result.list})
        }).catch((error) => {
            console.log(error.message)
        })
    }

    componentDidUpdate = () => {
        this.componentDidMount()
    }

    onChangeNomeDaMusica = (event) => {
        this.setState({nomeDaMusica: event.target.value})
    }
    
    onChangeNomeDoArtista = (event) => {
        this.setState({nomeDoArtista: event.target.value})
    }

    onChangeLinkDaMusica = (event) => {
        this.setState({linkDaMusica: event.target.value})
    }

    onChangeSelecionaPlaylist = (event) => {
        this.setState({playlistSelecionada: event.target.value})
    }

    onClickAdicionaMusica = () => {
        const body = {
            name: this.state.nomeDaMusica,
            artist: this.state.nomeDoArtista,
            url: this.state.linkDaMusica
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada}/tracks`, body, {
            headers: {
                Authorization: "julio-gabriel-turing"
            }
        }).then((response) => {
            alert("Música Adicionada com sucesso")
            return this.setState({nomeDaMusica: "", nomeDoArtista: "", linkDaMusica: ""})
        }).catch((error) => {
            alert(error.message)
        })
    }

    render () {

        return (
            <ContainerCadastrarMusicas>

                <h3>Adicione sua música favorita a sua playlist favorita:</h3>

                <CamposDeEntradasDeDados>
                    <label>Nome da música: </label>
                    <InputDeDados 
                        value={this.state.nomeDaMusica}
                        onChange={this.onChangeNomeDaMusica}
                        placeholder="Digite aqui o nome da música"
                    />
                </CamposDeEntradasDeDados>

                <CamposDeEntradasDeDados>
                    <label>Artista(s): </label>
                    <InputDeDados 
                        value={this.state.nomeDoArtista}
                        onChange={this.onChangeNomeDoArtista}
                        placeholder="Digite aqui o nome do artista"
                    />
                </CamposDeEntradasDeDados>

                <CamposDeEntradasDeDados>
                    <label>Url:</label>
                    <InputDeDados 
                        value={this.state.linkDaMusica}
                        onChange={this.onChangeLinkDaMusica}
                        placeholder="Digite aqui o link da música"
                    />
                </CamposDeEntradasDeDados>

                <CamposDeEntradasDeDados>
                    <p>Selecione a playlist que deseja adicionar: </p>
                    <CampoDeSelecao onChange={this.onChangeSelecionaPlaylist} value={this.state.playlistSelecionada}>
                        <option>Selecionar playlist</option>
                            {this.state.selecionaPlaylist.map((playlist) => {
                                return <option value={playlist.id} key={playlist.id}>{playlist.name}</option>
                            })}
                    </CampoDeSelecao>
                </CamposDeEntradasDeDados>

                <BotaoAdicionaMusica onClick={this.onClickAdicionaMusica}>ADICIONAR</BotaoAdicionaMusica>
            </ContainerCadastrarMusicas>
        )

    }

}

export default Music