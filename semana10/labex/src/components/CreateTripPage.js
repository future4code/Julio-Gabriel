import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const ContainerEntradas = styled.div
`
width: 90vw;
height: 70vh;
margin: 0 5vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const PosicionamentoEntradas = styled.div
`
display: flex;
flex-direction: column;
font-weight: bold;
width: 15vw;
margin-bottom: 1vh;
`

const EntradaDescricao = styled.input
`
width: 15vw;
height: 10vh;
`

const BotaoCadastrar = styled.button
`
width: 10vw;
height: 5vh;
background-color: #FF4500;
border-style: none;
color: white;
`

const TituloSecao = styled.h1
`
margin: 0;
border-bottom: 1vh;
`

const BotaoAdmin = styled.button
`
margin: 0;
`

function CreateTripPage() {

    const [nome, onChangeNome, setNome] = useInput("")
    const [data, onChangeData, setData] = useInput("")
    const [duracao, onChangeDuracao, setDuracao] = useInput("")
    const [descricao, onChangeDescricao, setDescricao] = useInput("")
    const [planeta, onChangePlaneta, setPlaneta] = useInput("")
    const history = useHistory()

    const onClickAdmin = () => {
        history.push("/admin")
    }

    const onClickCriarViagem = () => {
        const token = window.localStorage.getItem("token")
        const body = {
            name: nome, 
            planet: planeta,
            date: data,
            description: descricao,
            durationInDays: duracao
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trips`, body, {
            headers: {
                auth: token
            }
        }).then((response) => {
            setNome("")
            setData("")
            setDuracao("")
            setDescricao("")
            setPlaneta("")
            alert("Viagem cadastrada com sucesso")
        }).catch((error) => {
            alert("Ops, houve um erro, tente novamente mais tarde.")
            console.log(error.message)
        })
    }

    return(
        <ContainerEntradas>
            <TituloSecao>CADASTRAR NOVA VIAGEM</TituloSecao>
            <PosicionamentoEntradas>
                <label>NOME:</label>
                <input type="text" value={nome} onChange={onChangeNome}></input>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>PLANETA:</label>
                <select value={planeta} onChange={onChangePlaneta}>
                    <option value="">Selecione um planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Marte">Marte</option>
                </select>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>DATA:</label>
                <input type="text"value={data} onChange={onChangeData}></input>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>DURAÇÃO</label>
                <input type="number" value={duracao} onChange={onChangeDuracao}></input>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>DESCRIÇÃO:</label>
                <EntradaDescricao type="text" value={descricao} onChange={onChangeDescricao}></EntradaDescricao>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
            <BotaoCadastrar onClick={onClickCriarViagem}>CADASTRAR</BotaoCadastrar>
            </PosicionamentoEntradas>
            <BotaoAdmin onClick={onClickAdmin}>Voltar</BotaoAdmin>
        </ContainerEntradas>
    )
}

export default CreateTripPage