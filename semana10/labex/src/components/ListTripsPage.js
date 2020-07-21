import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const ContainerListaDeViagens = styled.div
`
width: 90vw;
height: 70vh;
margin: 0 5vw;
display: flex;
flex-direction: column;
`

const CardViagem = styled.div
`
width: 90vw;
`

function ListTripsPage() {

    const [viagens, setViagens] = useState([])

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trips",)
        .then((response) => {
            setViagens(response.data.trips)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }, [])

    const history = useHistory()

    const onClickAdmin = () => {
        history.push("/admin")
    }

    const onClickDetalhes = (Identificador) => {
        console.log(Identificador)
        history.push("/detalhesdaviagem/" + Identificador)
    }

    return(
        <ContainerListaDeViagens>
            {viagens.map((viagem) => {
                return <CardViagem key={viagem.id}> {viagem.name} {viagem.description} {viagem.durationInDays} 
                            {viagem.date} {viagem.planet} <button onClick={() => onClickDetalhes(viagem.id)}>Ver Detalhes</button>    
                        </CardViagem>
            })}
            <button onClick={onClickAdmin}>Voltar</button>
        </ContainerListaDeViagens>
    )
}

export default ListTripsPage