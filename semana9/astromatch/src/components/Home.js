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
`

const InfoPerfil = styled.div
`
width: 30vw;
height: 60vh;
display: grid;
grid-template-rows: 8fr 1fr 1fr;
grid-template-columns: 1fr 5fr 1fr;
`

const ConteudoPerfil = styled.div
`
width: 28vw;
display: grid;
grid-row: 3/3;
grid-column: 2/3;
`

const NomeIdade = styled.div
`
width: 28vw;
color: white;
font-size: 24px;
font-weight: bold;
margin-left: 1vw;
`

const Biografia = styled.p
`
width: 25vw;
color: white;
font-size: 16px;
font-weight: bold;
margin-left: 1vw;
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
:hover{
    background-color: red;
    color: white;
} 
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
:hover{
    background-color: green;
    color: white;
}
`

const ImagemPerfil = styled.img
`
width: 28vw;
height: 60vh;
border-radius: 5px;
display: grid;
grid-row: 1/3;
grid-column: 2/3;
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

    const onClickNaoGostei = (Identificador) => {
        const body = {
            "id": `${Identificador}`,
	        "choice": false
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body,)
        .then((response) => {
            retornaPerfil(aluno)
        })
        .catch((error) => {
            console.log(error.message)
        })    
    }

    const onClickGostei = (Identificador) => {
        const body = {
            "id": `${Identificador}`,
            "choice": true
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body,)
        .then((response) => {
            retornaPerfil(aluno)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <ContainerHome>
            <InfoPerfil>
                <ImagemPerfil src={perfilExibido.photo}></ImagemPerfil>
                <ConteudoPerfil>
                    <NomeIdade>{perfilExibido.name}, {perfilExibido.age}</NomeIdade>
                    <Biografia>{perfilExibido.bio}</Biografia>
                </ConteudoPerfil>
            </InfoPerfil>
            <ContainerBotoes>
                <BotaoNaoGostei onClick={() => onClickNaoGostei(perfilExibido.id)}>X</BotaoNaoGostei>
                <BotaoGostei onClick={() => onClickGostei(perfilExibido.id)}>❤</BotaoGostei>
            </ContainerBotoes>
        </ContainerHome>
    )
}

export default Home