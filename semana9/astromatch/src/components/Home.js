import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerHome = styled.div 
`
width: 30vw;
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
`

const ContainerBotoes = styled.div
`
display: flex;
justify-content: center;
`

const BotaoNaoGostei = styled.button
`
border: 1px solid red;
color: red;
font-weight: bold;
font-size: 32px;
width: 4vw;
height: 4vw;
background: transparent;
border-radius: 100%;
margin-right: 1vw;
`

const BotaoGostei = styled.button
`
border: 1px solid green;
color: green;
font-weight: bold;
font-size: 32px;
width: 4vw;
height: 4vw;
background: transparent;
border-radius: 100%;
`

function Home() {

    const [perfilExibido, setPerfilExibido] = useState([])

    const aluno = "julio-gabriel-turing"

    const retornaPerfil = (aluno) => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`,)
        .then((response) => {
            setPerfilExibido(response.data.profile)
            console.log(perfilExibido)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <ContainerHome>
            <p>Home</p>
            <ContainerBotoes>
                <BotaoNaoGostei>X</BotaoNaoGostei>
                <BotaoGostei>❤</BotaoGostei>
            </ContainerBotoes>
        </ContainerHome>
    )
}

export default Home