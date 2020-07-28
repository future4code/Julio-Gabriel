import styled from 'styled-components'

export const ContainerHomePage = styled.div
`
width: 90vw;
min-height: 70vh;
margin-left: 5vw;
margin-right: 5vw;
display: grid;
grid-template-columns: 3fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`

export const Titulo = styled.h1
`
margin: 0;
display: grid;
grid-column: 1/1;
grid-row: 2/3;
`

export const Descricao = styled.h4
`
display: grid;
grid-column: 1/1;
grid-row: 4/5;
align-content: center;
margin: 0;
font-weight: normal;
font-size: 24px;
`

export const BotaoInscricao = styled.button
`
border-style: none;
background-color: #FF4500;
color: white;
border-radius: 0.5vw;
width: 15vw;
border-radius: 3vw;
padding: 1vh;
display: grid;
grid-column: 2/3;
grid-row: 4/5;
align-self: center;
font-size: 24px;
`