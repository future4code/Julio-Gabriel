import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'
import BotaoGostei from './BotaoGostei'
import BotaoNaoGostei from './BotaoNaoGostei'

const ContainerHome = styled.div 
`
width: 30vw;
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

const ContainerMensagem = styled.div
`
display: flex;
width: 30vw;
height: 80vh;
flex-direction: column;
justify-content: center;
text-align: center;
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

const ImagemPerfil = styled.img
`
width: 28vw;
height: 60vh;
border-radius: 5px;
display: grid;
grid-row: 1/3;
grid-column: 2/3;
`

function Home(props) {

    const [perfilExibido, setPerfilExibido] = useState([])
    const [percorrido, setPercorrido] = useState(false)

    useEffect(() => {
        retornaPerfil()
        setPercorrido(false)
    }, [props.atualizaEstado])

    const retornaPerfil = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julio-gabriel-turing/person`,)
        .then((response) => {
            if (response.data.profile !== null) {
                setPerfilExibido(response.data.profile)
            } else {
                setPercorrido(true)
                setPerfilExibido([])
            }   
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const renderizaNaTela = () => {
        if (perfilExibido.length === 0 && percorrido === false) {
            return (
                <ContainerHome>
                    <CircularProgress />
                </ContainerHome>
            )
        } else if (percorrido === true) {
            return (
                <ContainerMensagem>
                    <p>Você já percorreu todas as opções, caso queira ver novamente, clique para limpar swipes e 
                    matches.</p>
                </ContainerMensagem>
            )
        } else {
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
                        <BotaoNaoGostei 
                            keyDoPerfil={perfilExibido.id}
                            atualizaEstado={retornaPerfil}
                        />
                        <BotaoGostei 
                            keyDoPerfil={perfilExibido.id}
                            atualizaEstado={retornaPerfil}
                        />
                    </ContainerBotoes>
                </ContainerHome>
            )
        }
    }

    return (
        <div>
            {renderizaNaTela()}
        </div>
    )
}

export default Home