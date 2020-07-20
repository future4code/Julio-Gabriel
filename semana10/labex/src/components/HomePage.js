import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerHomePage = styled.div
`
width: 90vw;
min-height: 70vh;
margin-left: 5vw;
margin-right: 5vw;
display: grid;
grid-template-columns: 3fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`

const Titulo = styled.h1
`
margin: 0;
display: grid;
grid-column: 1/1;
grid-row: 2/3;
`

const Descricao = styled.h4
`
display: grid;
grid-column: 1/1;
grid-row: 4/5;
align-content: center;
margin: 0;
font-weight: normal;
`

const BotaoInscricao = styled.button
`
border-style: none;
background-color: #FF4500;
color: white;
border-radius: 0.5vw;
width: 15vw;
padding: 1vh;
display: grid;
grid-column: 2/3;
grid-row: 4/5;
align-self: center;
font-size: 24px;
`

function HomePage() {
    return(
        <ContainerHomePage>
            <Titulo>FAÇA A VIAGEM ESPACIAL DO SEU SONHO</Titulo>
            <Descricao>FICOU INTERESSADO? PARTICIPE DO PROCESSO</Descricao>
            <BotaoInscricao>INSCREVA-SE</BotaoInscricao>
        </ContainerHomePage>
    )
}

export default HomePage