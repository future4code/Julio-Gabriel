import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useInput from '../hooks/useInput'
import {useHistory} from 'react-router-dom'

const ContainerFormulario = styled.div
`
margin: 0 5vw;
width: 90vw;
min-height: 70vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const EntradaDeDados = styled.input
`
width: 30vw;
margin-bottom: 1vh;
`

const SelecaoDeDados = styled.select
`
width: 30vw;
margin-bottom: 1vh;
`
const Titulos = styled.label
`
width: 30vw;
font-weight: bold;
`

const EntradaDeDadosMaior = styled.input
`
width: 30vw;
height: 10vh;
margin-bottom: 1vh;
`

const BotaoCadastrar = styled.button
`
width: 10vw;
height: 5vh;
background-color: #FF4500;
border-style: none;
color: white;
`

function ApplicationFormPage() {

    const [viagens, setViagens] = useState([])
    const [nome, onChangeNome, setNome] = useInput("")
    const [idade, onChangeIdade, setIdade] = useInput("")
    const [why, onChangeWhy, setWhy] = useInput("")
    const [profissao, onChangeProfissao, setProfissao] = useInput("")
    const [pais, onChangePais, setPais] = useInput("")
    const [trip, onChangeTrip, setTrip] = useInput("")
    const history = useHistory()

    useEffect (()=> {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trips",)
        .then((response) => {
            setViagens(response.data.trips)
        })
        .catch((error) => {
            console.log(error.message)
        })      
    }, [])

    const onClickHomePage = () => {
        history.push("/")
    }

    const onClickCadastrarCandidato = (Identificador) => {
        const body = {
            name: nome,
            age: idade,
            applicationText: why,
            profession: profissao,
            country: pais
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trips/${Identificador}/apply`, body,)
        .then((response) => {
            setNome("")
            setIdade("")
            setWhy("")
            setProfissao("")
            setPais("")
            setTrip("")
            alert("Você se cadastrou com sucesso")
        }).catch((error) => {
            alert("Ops, houve um erro, tente novamente mais tarde")
        })
    }

    return (
        <ContainerFormulario>
            <Titulos>NOME COMPLETO:</Titulos>
            <EntradaDeDados type="text" value={nome} onChange={onChangeNome}></EntradaDeDados>
            <Titulos>IDADE:</Titulos>
            <EntradaDeDados type="number" value={idade} onChange={onChangeIdade}></EntradaDeDados>
            <Titulos>PORQUE EU SOU UM BOM CANDIDATO(A)?:</Titulos>
            <EntradaDeDadosMaior type="text" value={why} onChange={onChangeWhy}></EntradaDeDadosMaior>
            <Titulos>PROFISSÃO:</Titulos>
            <EntradaDeDados type="tex" value={profissao} onChange={onChangeProfissao}></EntradaDeDados>
            <Titulos>PAÍS:</Titulos>
            <SelecaoDeDados value={pais} onChange={onChangePais}>
                <option value="">Selecione</option>
                <option value="Brasil">BRASIL</option>
                <option value="Argentina">ARGENTINA</option>
                <option value="Uruguai">URUGUAI</option>
            </SelecaoDeDados>
            <Titulos>Viagem</Titulos>
            <SelecaoDeDados value={trip} onChange={onChangeTrip}>
                <option value="">Escolha uma viagem</option>
                {viagens.map((viagem) => {
                    return <option key={viagem.id} value={viagem.id}>{viagem.name}</option>
                })}
            </SelecaoDeDados>
            <BotaoCadastrar onClick={() => onClickCadastrarCandidato(trip)}>CADASTRAR</BotaoCadastrar>
            <button onClick={onClickHomePage}>VOLTAR</button>
        </ContainerFormulario>
    )
}

export default ApplicationFormPage