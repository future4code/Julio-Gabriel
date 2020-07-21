import React from "react"
import styled from "styled-components"
import useInput from '../hooks/useInput'
import {useHistory} from 'react-router-dom'

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

    const [email, setEmail] = useInput("")
    const [senha, setSenha] = useInput("")

    const history = useHistory()

    const onClickEntrar = () => {
        history.replace("/admin")
    }

    return (
        <ContainerLogin>
            <label>Email</label>
            <EntradaDeDados type="email" value={email} onChange={setEmail}></EntradaDeDados>
            <label>Senha</label>
            <EntradaDeDados type="password" value={senha} onChange={setSenha}></EntradaDeDados>
            <BotaoLogin onClick={onClickEntrar}>ENTRAR</BotaoLogin>
        </ContainerLogin>
    )
}

export default LoginPage