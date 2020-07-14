import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerHome = styled.div 
`
width: 30vw;
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

const ContainerBotoes = styled.div
`
width: 28vw;
display: flex;
justify-content: space-around;
border: 1px solid black;
`

const InfoPerfil = styled.div
`
width: 30vw;
height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid blue;
`

const NomeIdade = styled.div
`
position: absolute;
width: 28vw;
`

const Biografia = styled.p
`
position: absolute;
width: 28vw;
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

const ImagemPerfil = styled.img
`
position: absolute;
width: 28vw;
height: 60vh;
border-radius: 5px;
box-shadow: 3px 3px 3px 3px rgba(50, 50, 50, 50);
`

function Home() {

    const [perfilExibido, setPerfilExibido] = useState([])

    const aluno = "julio-gabriel-turing"

    useEffect(() => {
        retornaPerfil(aluno)
    }, [])

    const retornaPerfil = (aluno) => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`,)
        .then((response) => {
            setPerfilExibido(response.data.profile)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <ContainerHome>
            <InfoPerfil>
                <ImagemPerfil src={perfilExibido.photo}></ImagemPerfil>
                <NomeIdade>{perfilExibido.name}, {perfilExibido.age}</NomeIdade>
                <Biografia>{perfilExibido.bio}</Biografia>
            </InfoPerfil>
            <ContainerBotoes>
                <BotaoNaoGostei>X</BotaoNaoGostei>
                <BotaoGostei>❤</BotaoGostei>
            </ContainerBotoes>
        </ContainerHome>
    )
}

export default Home