import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
            <div>
                {this.state.nomeDaPlaylist}
                {this.state.musicasNaPlaylist.map((musica) => {
                    return <li key={musica.id}>Nome da Música: {musica.name} Artista: {musica.artist} Reproduzir: <audio src={musica.url} controls></audio> </li>
                })}
                <button onClick={this.props.voltarPlaylists}>Voltar</button>
            </div>
        )

    }

}

export default Details