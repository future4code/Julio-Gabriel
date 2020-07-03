import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Playlists from './component/Playlists';
import Music from './component/Music'

const Container = styled.div
`
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
`

const ContainerAdicionaItens = styled.div
`
display: flex;
justify-content: center;
`

const ContainerCriarPlaylist = styled.div
`
width: 50vw;
display: flex;
flex-direction: column;
align-items: center;
`

const InputNomePlaylist = styled.input
`
width: 20vw;
height: 5vh;
`

const BotaoCriarPlaylist = styled.button
`
margin-left: 1vw;
margin-top: 2vh;
width: 10vw;
height: 6vh;
background-color: green;
color: white;
font-size: 12px;
font-weight: bold;
border-style: none;
border-radius: 2px; 
`

const BotaoExibirPlaylist = styled.button
`
width: 10vw;
height: 6vh;
background-color: green;
color: white;
font-size: 12px;
font-weight: bold;
border-style: none;
border-radius: 2px;
`
const SecaoPlaylist = styled.div
`
margin-bottom: 1vh;
`

class App extends React.Component {

  state = {
    novaPlaylist: "",
    playlistExiste: false,
    buscaPlaylistExistente: [],
    exibirPlaylists: false
  }

  onChangeNovaPlaylist = (event) => {
    this.setState({novaPlaylist: event.target.value})
  }

  buscaPlaylist = () => {
    this.setState({playlistExiste: false})
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.novaPlaylist}`, {
      headers: {
        Authorization: "julio-gabriel-turing"
      }
    }).then((response) => {
      this.setState({buscaPlaylistExistente: response.data.result.playlist})
      {this.state.buscaPlaylistExistente.forEach((playlist) => {
        if (this.state.novaPlaylist === playlist.name) {
          alert("Playlist ja está cadastrada com este nome, por favor, tente outro")
          this.setState({novaPlaylist: ""})
          return this.setState({playlistExiste: true})
        }        
      })}
      if (this.state.playlistExiste === false) {
        return this.criarPlaylist()
      }  
    }).catch((error) => {
      return alert(error.message)
    })
  }

  criarPlaylist = () => {
      const body = {
        name: this.state.novaPlaylist
      }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
        headers: {
          Authorization: "julio-gabriel-turing"
        }
      }).then((response) => {
        this.setState({playlistExiste: false, novaPlaylist: ""})
        return alert("Playlist cadastrado com sucesso")
      }).catch((error) => {
        return alert(error.message)
      })
  }

  onClickExibePlaylists = () => {
    this.setState({exibirPlaylists: !this.state.exibirPlaylists})
  }

  render () {

    const renderizaPlaylists = () => {
      if (this.state.exibirPlaylists === true) {
        return <Playlists 
                minimizarPlaylists={this.onClickExibePlaylists}
               />
      } else {
        return <BotaoExibirPlaylist onClick={this.onClickExibePlaylists}>EXIBIR PLAYLISTS</BotaoExibirPlaylist>
      }
    }

    return (
      <Container>

        <header>
          <h1>Labefy</h1>
        </header>

        <ContainerAdicionaItens>
          <ContainerCriarPlaylist>
            <SecaoPlaylist>
              <h3>Crie sua playlist agora:</h3>
              <h5> É rápido e fácil</h5>
              <InputNomePlaylist 
                value={this.state.novaPlaylist}
                onChange={this.onChangeNovaPlaylist}
                placeholder="Digite aqui o nome da sua nova playlist"
              />
              <BotaoCriarPlaylist onClick={this.buscaPlaylist}>CRIAR PLAYLIST</BotaoCriarPlaylist>
            </SecaoPlaylist>
            <SecaoPlaylist>
              {renderizaPlaylists()}
            </SecaoPlaylist>
          </ContainerCriarPlaylist>
          <Music />          
        </ContainerAdicionaItens>

        

      </Container>
    )

  }
}

export default App;