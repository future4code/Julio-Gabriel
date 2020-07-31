import styled from 'styled-components'

export const ContainerScreenEdit = styled.div
`
position: fixed;
top: 16vh;
width: 90%;
height: 50vh;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`

export const Entrada = styled.input
`
margin: 1vh 1vw;
width: 20vw;
`

export const Selecao = styled.select
`
margin: 1vh 1vw;
width: 15vw;
`

export const BotaoEditarTarefa = styled.button
`
background-color: yellow;
color: black;
width: 10vw;
height: 5vh;
font-size: 16px;
font-weight: bold;
border-style: none;
border-radius: 16px;
`

export const BotaoCancelar = styled.button
`
background-color: red;
color: white;
width: 6vw;
height: 5vh;
font-size: 16px;
font-weight: bold;
border-style: none;
border-radius: 16px;
margin-left: 1vw;
`