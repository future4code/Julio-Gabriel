import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useInput from '../hooks/useInput'

const ContainerEntradas = styled.div
`
width: 35vw;
height: 70vh;
margin: 0 5vw;
display: flex;
flex-direction: column;
justify-content: center;
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

function CreateTripPage() {

    const [nome, onChangeNome] = useInput("")
    const [data, onChangeData] = useInput("")
    const [duracao, onChangeDuracao] = useInput("")
    const [descricao, onChangeDescricao] = useInput("")

    return(
        <ContainerEntradas>
            <TituloSecao>CADASTRAR NOVA VIAGEM</TituloSecao>
            <PosicionamentoEntradas>
                <label>NOME:</label>
                <input value={nome} onChange={onChangeNome}></input>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>PLANETA:</label>
                <select>
                    <option>Selecione um planeta</option>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Marte</option>
                </select>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>DATA:</label>
                <input value={data} onChange={onChangeData}></input>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>DURAÇÃO</label>
                <input value={duracao} onChange={onChangeDuracao}></input>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>DESCRIÇÃO:</label>
                <EntradaDescricao value={descricao} onChange={onChangeDescricao}></EntradaDescricao>
            </PosicionamentoEntradas>
            <BotaoCadastrar>CADASTRAR</BotaoCadastrar>
        </ContainerEntradas>  
    )
}

export default CreateTripPage