import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerDetails = styled.div
`
width: 31.5vw;
display: flex;
flex-direction: column;
justify-content: center;
`
const ContainerDosItens = styled.div
`
display: flex;
flex-direction: column;
justify-content: center;
margin: 2vh;
font-weight: bold; 
`
const BotaoVoltar = styled.button
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

const PlayerAudio = styled.audio
`
margin-top: 1vh;
`

class Details extends React.Component {

    state = {
        keyPlaylist: this.props.chaveDaPlaylist,
        nomeDaPlaylist: this.props.nameOfPlaylist,
        musicasNaPlaylist: []
    }

    componentDidMount = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.keyPlaylist}/tracks`, {
            headers: {
                Authorization: "julio-gabriel-turing"
            }
        }).then((response) =>{
            this.setState({musicasNaPlaylist: response.data.result.tracks})
        }).catch((error) => {
            console.log(error.message)
        })
    }

    componentDidUpdate = () => {
        this.componentDidMount()
    }

    render () {

        return (
            <ContainerDetails>
                <h3>{this.state.nomeDaPlaylist}</h3>
                <div>
                    {this.state.musicasNaPlaylist.map((musica) => {
                        return <ContainerDosItens key={musica.id}>Nome da Música: {musica.name} Artista: {musica.artist} <PlayerAudio src={musica.url} controls></PlayerAudio> </ContainerDosItens>
                    })}
                </div>
                <BotaoVoltar onClick={this.props.voltarPlaylists}>Voltar</BotaoVoltar>
            </ContainerDetails>
        )

    }

}

export default Details