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

    const {form, onChange, resetaEntrada} = useInput({
        email: "",
        senha: ""
    })
    
    const [atualizaEstado, setAtualizaEstado] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleSave = (event) => {
        event.preventDefault()
        onClickEntrar()
    }

    const onClickEntrar = () => {
        const body = {
            email: form.email,
            password: form.senha
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/login", body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            resetaEntrada()
            history.replace("/admin")
            setAtualizaEstado(!atualizaEstado)
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
                    <form onSubmit={handleSave}>
                        <label>Email</label>
                        <EntradaDeDados
                            name="email" 
                            type="email" 
                            value={form.email} 
                            onChange={handleInputChange} 
                        />
                        <label>Senha</label>
                        <EntradaDeDados
                            name="senha" 
                            type="password" 
                            value={form.senha} 
                            onChange={handleInputChange} 
                        />
                        <BotaoLogin>ENTRAR</BotaoLogin>
                    </form>
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