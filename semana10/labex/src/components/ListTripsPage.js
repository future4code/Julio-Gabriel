import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Container = styled.div
`
width: 90vw;
display: flex;
margin-left: 5vw;
flex-direction: column;
`

const ContainerListaDeViagens = styled.div
`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 1vh;
`

const CardViagem = styled.div
`
border: 1px solid #FF4500;
border-radius: 5%;
max-width: 35vw;
margin-left: 1vw;
display: flex;
flex-direction: column;
margin-top: 2vh;
`

const DadosCardViagem = styled.div
`
margin: 0 1vw;
min-height: 50vh;
width: 35vw;
`

const BotaoMaisDetalhes = styled.button
`
width: 8vw;
height: 3vw;
border-style: none;
background-color: #FF4500;
color: white;
font-size: 16px;
font-weight: bold;
`

const BotaoVoltar = styled.button
`
width: 5vw;
height: 2vw;
border-style: none;
background-color: #FF4500;
color: white;
font-size: 16px;
font-weight: bold;
margin: 2vh 0;
`

const CentralizaBotaoMaisDetalhes = styled.div
`
width: 35vw;
display: flex;
justify-content: center;
margin-bottom: 1vh;
`

function ListTripsPage() {

    const [viagens, setViagens] = useState([])
    const history = useHistory()

    useEffect(() => {

        const token = window.localStorage.getItem("token")

        if (token === null) {
           history.push("/") 
        } else {
            axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trips",)
            .then((response) => {
                setViagens(response.data.trips)
            })
            .catch((error) => {
                console.log(error.message)
            })
        }
        
    }, [history])

    const onClickAdmin = () => {
        history.push("/admin")
    }

    const onClickDetalhes = (Identificador) => {
        history.push("/detalhesdaviagem/" + Identificador)
    }

    return(
        <Container>
                <ContainerListaDeViagens>
                {viagens.map((viagem) => {
                    return <CardViagem key={viagem.id}> 
                                <DadosCardViagem>
                                <h1>{viagem.name}</h1> 
                                <h3>{viagem.description}</h3> 
                                <h5>Duração: {viagem.durationInDays}</h5>
                                <h5>Data de embarque: {viagem.date}</h5> 
                                <h5>Destino: {viagem.planet}</h5> 
                                </DadosCardViagem>
                                <CentralizaBotaoMaisDetalhes>
                                    <BotaoMaisDetalhes onClick={() => onClickDetalhes(viagem.id)}>Ver Detalhes</BotaoMaisDetalhes>     
                                </CentralizaBotaoMaisDetalhes>   
                            </CardViagem>
                })}
                </ContainerListaDeViagens>
            <BotaoVoltar onClick={onClickAdmin}>Voltar</BotaoVoltar>
        </Container>
    )
}

export default ListTripsPage