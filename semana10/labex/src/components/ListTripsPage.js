import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Container, ContainerListaDeViagens, CardViagem, DadosCardViagem, BotaoMaisDetalhes, BotaoVoltar, 
CentralizaBotaoMaisDetalhes} from './StyleListTripsPage'

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
                                        <BotaoMaisDetalhes onClick={() => onClickDetalhes(viagem.id)}>
                                            Ver Detalhes
                                        </BotaoMaisDetalhes>     
                                    </CentralizaBotaoMaisDetalhes>   
                                </CardViagem>
                    })}
                </ContainerListaDeViagens>
            <BotaoVoltar onClick={onClickAdmin}>Voltar</BotaoVoltar>
        </Container>
    )
}

export default ListTripsPage