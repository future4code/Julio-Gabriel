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

const Texto = styled.p
`
font-size: 16px;
font-weight: bold;
color: green;
`

function BotaoGostei(props) {

    const [identificador, setIdentificador] = useState(0)
    const [match, setMatch] = useState(false)

    useEffect (()=> {
        setIdentificador(props.keyDoPerfil)
        setMatch(false)
    }, [props.keyDoPerfil])

    useEffect (()=> {

        document.addEventListener("keydown", onTeclaPressionada)

        function onTeclaPressionada(event) {
            if(event.code === "ArrowRight") {
                onClickGostei()
            }
        }

        return () => {
            document.removeEventListener('keydown', onTeclaPressionada) 
        }

    })
    
    const onClickGostei = () => {
        const body = {
            "id": `${identificador}`,
            "choice": true
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julio-gabriel-turing/choose-person`, body,)
        .then((response) => {
            setMatch(response.data.isMatch)
            props.atualizaEstado()
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const gostouTambem = () => {
        if (match) {
            return (
                <Texto>Gostou de você</Texto>
            )
        } else {
            return (
                <Botao onClick={onClickGostei}>❤</Botao>
            )
        }
    }

    return (
        gostouTambem()
    )
}

export default BotaoGostei