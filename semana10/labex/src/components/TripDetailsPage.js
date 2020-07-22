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

const PosicionamentoDados = styled.div
`
margin: 0 1vw;
`

function TripDetailsPage() {

    const history = useHistory()
    const pathParams = useParams()

    const [detalheViagem, setdetalheViagem] = useState({})
    const [candidatos, setCandidatos] = useState([])

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
            <Viagem>
                {candidatos.map((candidato) => {
                    return (
                        <PosicionamentoDados key={candidato.id}>
                            <h3>{candidato.name}</h3>
                            <h5>{candidato.age}</h5>
                            <h5>{candidato.applicationText}</h5>
                            <h5>{candidato.country}</h5>
                            <h5>{candidato.profession}</h5>
                            <button onClick={() => onClickAprova(candidato.id)}>APROVAR</button>
                            <button onClick={() => onClickReprova(candidato.id)}>REPROVAR</button>
                        </PosicionamentoDados>
                    )
                })}
            </Viagem>
            <button onClick={onClickAdmin}>VOLTAR</button>
        </ContainerDetalhesDaViagem>
    )
}

export default TripDetailsPage