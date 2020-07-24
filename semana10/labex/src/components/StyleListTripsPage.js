import styled from 'styled-components'

export const Container = styled.div
`
width: 90vw;
display: flex;
margin-left: 5vw;
flex-direction: column;
`

export const ContainerListaDeViagens = styled.div
`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 1vh;
`

export const CardViagem = styled.div
`
border: 1px solid #FF4500;
border-radius: 5%;
max-width: 35vw;
margin-left: 1vw;
display: flex;
flex-direction: column;
margin-top: 2vh;
`

export const DadosCardViagem = styled.div
`
margin: 0 1vw;
min-height: 50vh;
width: 33vw;
`

export const BotaoMaisDetalhes = styled.button
`
width: 10vw;
height: 3vw;
border-style: none;
border-radius: 2vw;
background-color: #FF4500;
color: white;
font-size: 16px;
font-weight: bold;
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
`

export const CentralizaBotaoMaisDetalhes = styled.div
`
width: 35vw;
display: flex;
justify-content: center;
margin-bottom: 1vh;
`