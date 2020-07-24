import styled from 'styled-components'

export const ContainerAdmin = styled.div
`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
height: 70vh;
`

export const ContainerSecoes = styled.div
`
border: 1px solid #FF4500;
border-radius: 3%;
width: 40vw;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContainerConteudo = styled.div
`
width: 40vw;
height: 40vh;
display: flex;
flex-direction: column;
justify-content: space-around;
`

export const InformacaoSecao = styled.h3
`
margin: 0;
text-align: center;
`

export const TituloSecao = styled.h1
`
margin: 0;
text-align: center;
`

export const BotaoSecoes = styled.button
`
width: 10vw;
height: 5vh;
font-weight: bold;
background-color: #FF4500;
border-style: none;
color: white;
border-radius: 1vw;
`