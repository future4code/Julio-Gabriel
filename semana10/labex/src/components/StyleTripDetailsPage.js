import styled from 'styled-components'

export const ContainerDetalhesDaViagem = styled.div
`
margin: 0 5vw;
width: 90vw;
min-height: 70vh;
display: flex;
flex-direction: column;
`

export const Viagem = styled.div
`
margin: 2vh;
border: 1px solid #FF4500;
border-radius: 1vw;
display: flex;
flex-direction: column;
justify-content: center;
`

export const ContainerPessoas = styled.div
`
width: 88vw;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
`

export const ContainerDadosPessoas = styled.div
`
border: 1px solid #FF4500;
border-radius: 1vw;
width: 30vw;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 5vh; 
`

export const Posicionamentos = styled.div
`
margin: 2vh;
border: 1px solid #FF4500;
border-radius: 1vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const PosicionamentoDados = styled.div
`
margin: 0 1vw;
`

export const BotaoAprovar = styled.button
`
background-color: green;
color: white;
width: 8vw;
height: 5vh;
border-style: none;
border-radius: 1vw;
margin-right: 1vw;
`

export const BotaoReprovar = styled.button
`
background-color: red;
color: white;
width: 8vw;
height: 5vh;
border-radius: 1vw;
border-style: none;
margin-bottom: 1vh;
`

export const BotaoVoltar = styled.button
`
width: 8vw;
height: 2vw;
border-style: none;
border-radius: 1vw;
background-color: #FF4500;
color: white;
font-size: 16px;
font-weight: bold;
margin: 2vh 0;
`