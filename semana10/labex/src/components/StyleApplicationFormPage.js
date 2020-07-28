import styled from 'styled-components'

export const ContainerFormulario = styled.div
`
width: 100%;
min-height: 70vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const PosicionamentoEntradas = styled.div
`
width: 30vw;
display: flex;
flex-direction: column;
font-weight: bold;
margin-bottom: 1vh;
`

export const EntradaDeDados = styled.input
`
width: 30vw;
margin-bottom: 1vh;
`

export const SelecaoDeDados = styled.select
`
width: 30vw;
margin-bottom: 1vh;
`

export const Titulos = styled.label
`
width: 30vw;
font-weight: bold;
`

export const EntradaDeDadosMaior = styled.input
`
width: 30vw;
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
margin: 2vh 5vw;
align-self: start;
`