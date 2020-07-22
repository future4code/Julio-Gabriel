import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const ContainerAdmin = styled.div
`
width: 90vw;
height: 70vh;
`

function Admin() {

    const history = useHistory()

    useEffect(() => {

        const token = window.localStorage.getItem("token")

        if (token === null) {
            history.push("/")
        }

    }, [history])

    const onClickListaDeViagens = () => {
        history.push("/listadeviagens")
    }

    const onClickCreateTripPage = () => {
        history.push("/paginacriarviagem")
    }

    return(
        <ContainerAdmin>
            <button onClick={onClickListaDeViagens}>Lista de Viagens</button>
            <button onClick={onClickCreateTripPage}>Criar Viagem</button>
        </ContainerAdmin>
    )
}

export default Admin