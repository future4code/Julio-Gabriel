import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

const ContainerDetalhesDaViagem = styled.div
`
margin: 0 5vw;
width: 90vw;
min-height: 70vh;
display: flex;
flex-direction: column;
`

const Viagem = styled.div
`
margin: 2vh;
border: 1px solid #FF4500;
border-radius: 1vw;
display: flex;
flex-direction: column;
justify-content: center;
`

const ContainerPessoas = styled.div
`
width: 88vw;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
`

const ContainerDadosPessoas = styled.div
`
border: 1px solid #FF4500;
border-radius: 1vw;
width: 30vw;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 5vh; 
`

const Posicionamentos = styled.div
`
margin: 2vh;
border: 1px solid #FF4500;
border-radius: 1vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const PosicionamentoDados = styled.div
`
margin: 0 1vw;
`

const BotaoAprovar = styled.button
`
background-color: green;
color: white;
width: 8vw;
height: 5vh;
border-style: none;
border-radius: 5%;
margin-right: 1vw;
`

const BotaoReprovar = styled.button
`
background-color: red;
color: white;
width: 8vw;
height: 5vh;
border-style: none;
border-radius: 5%;
margin-bottom: 1vh;
`

const BotaoVoltar = styled.button
`
width: 8vw;
height: 2vw;
border-style: none;
background-color: #FF4500;
color: white;
font-size: 16px;
font-weight: bold;
margin: 2vh 0;
`

function TripDetailsPage() {

    const history = useHistory()
    const pathParams = useParams()

    const [detalheViagem, setdetalheViagem] = useState({})
    const [candidatos, setCandidatos] = useState([])
    const [aprovados, setAprovados] = useState([])

    const onClickAdmin = () => {
        history.push("/admin")
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token === null) {
            history.push("/")
        } else {
            detalhesDaViagem()
        }
        
    }, [])

    const detalhesDaViagem = () => {
        const token = window.localStorage.getItem("token")
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trip/${pathParams.codigo}`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setdetalheViagem(response.data.trip)
            setCandidatos(response.data.trip.candidates)
            setAprovados(response.data.trip.approved)
        })
        .catch((error) => {
            console.log(error.message)
        }) 
    }

    const onClickAprova = (Identificador) => {
        const token = window.localStorage.getItem("token")
        const body = {
            approve: true
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trips/${pathParams.codigo}/candidates/${Identificador}/decide`, body, {
            headers: {
                auth: token 
            }
        }).then((response) => {
            detalhesDaViagem()
            console.log("Você aprovou um candidato")
        }).catch((error) => {
            console.log("Ocorreu um erro, tente novamente mais tarde.")
        })
    }

    const onClickReprova = (Identificador) => {
        const token = window.localStorage.getItem("token")
        const body = {
            approve: false
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trips/${pathParams.codigo}/candidates/${Identificador}/decide`, body, {
            headers: {
                auth: token
            }
        }).then((response) => {
            detalhesDaViagem()
            console.log("Você reprovou um candidato")
        }).catch((error) => {
            console.log("Ocorreu um erro, tente novamente mais tarde.")
        })
    }

    return (
        <ContainerDetalhesDaViagem>
            <Viagem>
                <PosicionamentoDados>
                    <h2>{detalheViagem.name}</h2>
                    <h3>{detalheViagem.description}</h3>
                    <h5>Duração: {detalheViagem.durationInDays} dias</h5>
                    <h5>Embarque: {detalheViagem.date}</h5>
                    <h5>Destino: {detalheViagem.planet}</h5>
                </PosicionamentoDados>
            </Viagem>
            <Posicionamentos>
                <PosicionamentoDados><h1>Aprovados</h1></PosicionamentoDados>
                <ContainerPessoas>
                    {aprovados.map((aprovado) => {
                        return (
                            <ContainerDadosPessoas key={aprovado.id}>
                                <PosicionamentoDados>
                                    <h3>{aprovado.name}</h3>
                                    <h4>{aprovado.applicationText}</h4>
                                    <h5>{aprovado.age}</h5>
                                    <h5>{aprovado.country}</h5>
                                    <h5>{aprovado.profession}</h5>
                                </PosicionamentoDados>
                            </ContainerDadosPessoas>
                        )
                    })}
                </ContainerPessoas>
            </Posicionamentos>
            <Posicionamentos>
                <PosicionamentoDados><h1>Candidatos</h1></PosicionamentoDados>
                <ContainerPessoas>
                    {candidatos.map((candidato) => {
                        return (                        
                            <ContainerDadosPessoas key={candidato.id}>
                                <PosicionamentoDados>
                                    <h3>{candidato.name}</h3>
                                    <h5>{candidato.age}</h5>
                                    <h5>{candidato.applicationText}</h5>
                                    <h5>{candidato.country}</h5>
                                    <h5>{candidato.profession}</h5>
                                    <div>
                                        <BotaoAprovar onClick={() => onClickAprova(candidato.id)}>APROVAR</BotaoAprovar>
                                        <BotaoReprovar onClick={() => onClickReprova(candidato.id)}>REPROVAR</BotaoReprovar>
                                    </div>
                                </PosicionamentoDados>
                            </ContainerDadosPessoas>
                        )
                    })}
                </ContainerPessoas>
            </Posicionamentos>
            <BotaoVoltar onClick={onClickAdmin}>VOLTAR</BotaoVoltar>
        </ContainerDetalhesDaViagem>
    )
}

export default TripDetailsPage