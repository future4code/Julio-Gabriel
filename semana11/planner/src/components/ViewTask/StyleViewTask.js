import styled from 'styled-components'

export const ContainerViewTask = styled.div
`
width: 100%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

export const ContainerListTaskDay = styled.div
`
width: 40%;
min-height: 40vh;
border: 1px solid orange;
border-radius: 2vw;
display: flex;
flex-direction: column;
align-items: center;
margin: 2vh 0;
`

export const ContainerTask = styled.div
`
display: flex;
margin: 1vh 0;
`

export const ItemTask = styled.li
`
text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
width: 25vw;
`

export const BotaoEditar = styled.button
`
margin-left: 1vw;
border-style: none;
background-color: yellow;
color: black;
height: 5vh;
width: 5vw;
font-size: 16px;
font-weight: bold;
border-radius: 10px;
`

export const BotaoExcluir = styled.button
`
margin-left: 1vw;
border-style: none;
background-color: red;
color: white;
height: 5vh;
width: 5vw;
font-size: 16px;
font-weight: bold;
border-radius: 10px;
`