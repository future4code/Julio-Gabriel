/* import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'joaozinho'}
          fotoUsuario={'https://picsum.photos/50/10'}
          fotoPost={'https://picsum.photos/200/100'}
        />
        <Post
          nomeUsuario={'terezinha'}
          fotoUsuario={'https://picsum.photos/50/20'}
          fotoPost={'https://picsum.photos/200/200'}
        />
      </div>
    );
  }
}

export default App; */

import React from 'react';
import './App.css';
import styled from 'styled-components'
import Post from './components/Post/Post';

const DisposicaoGeral = styled.div`
  width: 250px;
  display: flex;
  align-content: flex-start;
  margin: 10px
`
const DivMestre = styled.div`
  margin: 10px 0;
  width: 300px;
  border: 1px solid gray;
`
const ButtonFormatado = styled.button`
  width: 100px;
  height: 30px;
  background-color: blue;
  color: white;
  border-style: none;
`

const InputFormatado = styled.input`
  width: 300px;
  height: 30px;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario:"paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },
      {
        nomeUsuario:"joaozinho",
        fotoUsuario:"https://picsum.photos/50/10",
        fotoPost:"https://picsum.photos/200/100"
      },
      {
        nomeUsuario:"terezinha",
        fotoUsuario:"https://picsum.photos/50/20",
        fotoPost:"https://picsum.photos/200/200"
      }
    ],

    valorInputNomeDoUsuario: "",
    valorInputFotoDoUsuario: "",
    valorInputFotoPostagem: ""
    
  };

  adicionaPostagem = (posts) => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputNomeDoUsuario,
      fotoUsuario: this.state.valorInputFotoDoUsuario,
      fotoPost: this.state.valorInputFotoPostagem
    };

    const novoPostagem = [...this.state.posts, novaPostagem];

    this.setState({ Posts: novoPostagem });
  };

  onChangeInputNomeDoUsuario = event => {
    this.setState({ valorInputNomeDoUsuario: event.target.value });
  };

  onChangeInputFotoDoUsuario = event => {
    this.setState({ valorInputFotoDoUsuario: event.target.value });
  };

  onChangeInputFotoPostagem = event => {
    this.setState({ valorInputFotoPostagem: event.target.value });
  };

 render () {

    return (
      <div className={'app-container'}>

        <DivMestre>

          <DisposicaoGeral>
          <InputFormatado
            value={this.state.valorInputNomeDoUsuario}
            onChange={this.onChangeInputNomeDoUsuario}
            placeholder={"Usuário"}
          />
          </DisposicaoGeral>

          <DisposicaoGeral>
            <InputFormatado
              value={this.state.valorInputFotoDoUsuario}
              onChange={this.onChangeInputFotoDoUsuario}
              placeholder={"Foto do perfil"}
            />
          </DisposicaoGeral>

          <DisposicaoGeral>
            <InputFormatado
            value={this.state.valorInputFotoPostagem}
            onChange={this.onChangeInputFotoPostagem}
            placeholder={"Foto da Postagem"}
            />
          </DisposicaoGeral>

          <DisposicaoGeral>
            <ButtonFormatado onClick={this.adicionaPostagem}> 
              POSTAR
            </ButtonFormatado>
          </DisposicaoGeral>

        </DivMestre>

        {this.state.posts.map ((post) => {
          return <Post 
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        })}
      </div>
    ) 
}
}

export default App;

