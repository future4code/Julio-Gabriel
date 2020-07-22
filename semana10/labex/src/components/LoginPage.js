import React, {useEffect, useState} from "react"
import styled from "styled-components"
import axios from "axios"
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

const BotaoLogout = styled.button
`
margin-left: 1vw;
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

    const [email, onChangeEmail, setEmail] = useInput("")
    const [senha, onChangeSenha, setSenha] = useInput("")
    const [atualizaEstado, setAtualizaEstado] = useState(false)

    const history = useHistory()

    const onClickEntrar = () => {
        const body = {
            email: email,
            password: senha
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/login", body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            history.replace("/admin")
            setAtualizaEstado(!atualizaEstado)
            setEmail("")
            setSenha("")
        })
        .catch((error) => {
            console.log(error.message)
        })       
    }

    const onClickSair = () => {
        window.localStorage.clear()
        setAtualizaEstado(!atualizaEstado)
        history.push("/")
    }

    const renderizaNaTela = () => {

        const token = window.localStorage.getItem("token")

        if (token === null) {
            return (
                <div>
                    <label>Email</label>
                    <EntradaDeDados type="email" value={email} onChange={onChangeEmail}></EntradaDeDados>
                    <label>Senha</label>
                    <EntradaDeDados type="password" value={senha} onChange={onChangeSenha}></EntradaDeDados>
                    <BotaoLogin onClick={onClickEntrar} type="reset">ENTRAR</BotaoLogin>
                </div>
            )
        } else {
            return (
                <ContainerLogin>
                    <p>Seja bem vindo, Admin</p>
                    <BotaoLogout onClick={onClickSair}>LOGOUT</BotaoLogout> 
                </ContainerLogin>
            )
        }

    }

    return (
        <ContainerLogin>
            {renderizaNaTela()}
        </ContainerLogin>
    )
}

export default LoginPage