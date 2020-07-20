import React from "react"
import styled from "styled-components"
import axios from "axios"

const ContainerLogin = styled.div
`
margin-right: 5vw;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: white;
`

const BotaoLogin = styled.button
`
height: 5vh;
border-style: none;
background-color: #FF4500;
color: white;
`

const EntradaDeDados = styled.input
`
height: 4vh;
margin-left: 1vw;
margin-right: 1vw;
`

function LoginPage() {
    return (
        <ContainerLogin>
            <label>Email</label>
            <EntradaDeDados type="email"></EntradaDeDados>
            <label>Senha</label>
            <EntradaDeDados type="password"></EntradaDeDados>
            <BotaoLogin>ENTRAR</BotaoLogin>
        </ContainerLogin>
    )
}

export default LoginPage