import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import {BotaoVoltar, BotaoReprovar, BotaoAprovar, PosicionamentoDados, Posicionamentos, ContainerDadosPessoas, 
ContainerPessoas, Viagem, ContainerDetalhesDaViagem} from './StyleTripDetailsPage'

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
        
    }, [history])

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
            alert("Você aprovou um candidato")
        }).catch((error) => {
            alert("Ocorreu um erro, tente novamente mais tarde.")
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
            alert("Você reprovou um candidato")
        }).catch((error) => {
            alert("Ocorreu um erro, tente novamente mais tarde.")
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