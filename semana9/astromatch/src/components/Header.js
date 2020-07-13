import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Logo from '../images/logo.png'
import BotaoMatch from '../images/avatar.svg'
import BotaoHome from '../images/grupo.svg'

const ContainerHeader = styled.div
`
width: 30vw;
height: 10vh;
border-bottom: 1px solid #d3d3d3;
display: grid;
grid-template-columns: 1fr 4fr 1fr;
`

const BotaoVoltar = styled.button
`
display: grid;
grid-column: 1/2;
justify-self: center;
align-self: center;
background: transparent;
border-style: none;
`

const LogoDoAplicativo = styled.img 
`
width: 147px;
display: grid;
grid-column: 2/3;
justify-self: center;
align-self: center;
`

const BotaoMatches = styled.button
`
display: grid;
grid-column: 3/4;
justify-self: center;
align-self: center;
background: transparent;
border-style: none;
`

const Botoes = styled.img
`
width: 2vw;
`

function Header(props) {

    const renderizaBotaoNaTela = (botao) => {
        if (!botao) {
            return (
                <ContainerHeader>
                    <LogoDoAplicativo src={Logo}></LogoDoAplicativo>
                    <BotaoMatches onClick={props.botaoMatches}><Botoes src={BotaoMatch}></Botoes></BotaoMatches> 
                </ContainerHeader>
            )
        } else {
            return (
                <ContainerHeader>
                    <BotaoVoltar onClick={props.botaoMatches}><Botoes src={BotaoHome}></Botoes></BotaoVoltar>
                    <LogoDoAplicativo src={Logo}></LogoDoAplicativo>
                </ContainerHeader>
            )
        }
    }

    return (
        <div>
            {renderizaBotaoNaTela(props.botaoMuda)}
        </div>
    )
}

export default Header