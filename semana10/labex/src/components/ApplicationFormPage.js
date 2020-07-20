import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerFormulario = styled.div
`
margin-left: 5vw;
margin-right: 5vw;
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

function ApplicationFormPage() {

    const [viagens, setViagens] = useState([])

    useEffect (()=> {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trips",)
        .then((response) => {
            setViagens(response.data.trips)
        })
        .catch((error) => {
            console.log(error.message)
        })      
    }, [])
    
    return (
        
        <ContainerFormulario>
            <Titulos>NOME COMPLETO:</Titulos>
            <EntradaDeDados></EntradaDeDados>
            <Titulos>IDADE:</Titulos>
            <EntradaDeDados></EntradaDeDados>
            <Titulos>PORQUE EU SOU UM BOM CANDIDATO(A)?:</Titulos>
            <EntradaDeDadosMaior></EntradaDeDadosMaior>
            <Titulos>PROFISSÃO:</Titulos>
            <EntradaDeDados></EntradaDeDados>
            <Titulos>PAÍS:</Titulos>
            <SelecaoDeDados>
                <option>BRASIL</option>
                <option>ARGENTINA</option>
                <option>URUGUAI</option>
            </SelecaoDeDados>
            <Titulos>Viagem </Titulos>
            <SelecaoDeDados>
                <option>Escolha uma viagem</option>
                {viagens.map((viagem) => {
                    return <option key={viagem.id}>{viagem.name}</option>
                })}
            </SelecaoDeDados>
        </ContainerFormulario>
    )
}

export default ApplicationFormPage