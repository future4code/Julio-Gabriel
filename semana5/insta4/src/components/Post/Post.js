import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeBookMarkBranco from '../../img/bookmark.svg'
import iconeBookMarkBlack from '../../img/bookmark-black.svg'
import iconeShare from '../../img/share.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    marcado: false,
    numeroMarcado: 0,
    comentando: false,
    numeroComentarios: 0,
    compartilhando: false,
  }

  onClickCurtida = () => {
      if (this.state.curtido) {
        this.setState({ curtido: false })
        this.setState({ numeroCurtidas: this.state.numeroCurtidas - 1})
      } else if (!this.state.curtido) {
        this.setState({ curtido: true })
        this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
      }
  }

  onClickMarcado = () => {
    if (this.state.marcado) {
      this.setState({ marcado: false })
      this.setState({ numeroMarcado: this.state.numeroMarcado - 1})
    } else if (!this.state.marcado) {
      this.setState({ marcado: true })
      this.setState({numeroMarcado: this.state.numeroMarcado + 1})
    }
}

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoCompartilhar = () => {
    this.setState({
      compartilhando: false
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcado

    if(this.state.marcado) {
      iconeMarcado = iconeBookMarkBlack
    } else {
      iconeMarcado = iconeBookMarkBranco
    }    

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhando

    if(this.state.compartilhando) {
      componenteCompartilhando = <SecaoCompartilhar aoCompartilhei={this.aoCompartilhar}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador 
          icone={iconeMarcado}
          onClickIcone={this.onClickMarcado}
          valorContador={this.state.numeroMarcado}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeShare}
          onClickIcone={this.onClickCompartilhar}
        />

      </div>
      {componenteComentario}
      {componenteCompartilhando}
    </div>
    
  }
}

export default Post