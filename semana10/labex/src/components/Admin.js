import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const ContainerAdmin = styled.div
`
width: 90vw;
height: 70vh;
`

function Admin() {

    const history = useHistory()

    const onClickListaDeViagens = () => {
        history.push("/listadeviagens")
    }

    const onClickListaDeInscritos = () => {
        history.push("/detalhesdaviagem")
    }

    const onClickCreateTripPage = () => {
        history.push("/paginacriarviagem")
    }

    return(
        <ContainerAdmin>
            <button onClick={onClickListaDeViagens}>Lista de Viagens</button>
            <button onClick={onClickListaDeInscritos}>Lista de Inscritos</button>
            <button onClick={onClickCreateTripPage}>Criar Viagem</button>
        </ContainerAdmin>
    )
}

export default Admin