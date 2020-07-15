import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Botao = styled.button
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

function BotaoGostei(props) {

    const [identificador, setIdentificador] = useState(0)

    useEffect (()=> {
        setIdentificador(props.keyDoPerfil)
    }, [props.keyDoPerfil])

    const onClickGostei = () => {
        const body = {
            "id": `${identificador}`,
            "choice": true
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julio-gabriel-turing/choose-person`, body,)
        .then((response) => {
            props.atualizaEstado()
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <Botao onClick={onClickGostei}>❤</Botao>
    )
}

export default BotaoGostei