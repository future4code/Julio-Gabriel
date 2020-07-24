import styled from 'styled-components'

export const ContainerEntradas = styled.div
`
width: 90vw;
height: 70vh;
margin: 0 5vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const PosicionamentoEntradas = styled.div
`
display: flex;
flex-direction: column;
font-weight: bold;
width: 15vw;
margin-bottom: 1vh;
`

export const EntradaDescricao = styled.input
`
width: 15vw;
height: 10vh;
`

export const BotaoCadastrar = styled.button
`
width: 10vw;
height: 5vh;
border-radius: 2vw;
background-color: #FF4500;
border-style: none;
color: white;
`

export const TituloSecao = styled.h1
`
margin: 0;
border-bottom: 1vh;
`

export const BotaoVoltar = styled.button
`
width: 5vw;
height: 2vw;
border-style: none;
border-radius: 1vw;
background-color: #FF4500;
color: white;
font-size: 16px;
font-weight: bold;
margin: 2vh 0;
align-self: start;
`