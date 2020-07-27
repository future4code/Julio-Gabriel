import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Botao = styled.button
`
border: 1px solid red;
color: red;
font-weight: bold;
font-size: 32px;
width: 4vw;
height: 4vw;
background: transparent;
border-radius: 100%;
margin-right: 1vw;
:hover{
    background-color: red;
    color: white;
} 
`

function BotaoNaoGostei(props) {

    const [identificador, setIdentificador] = useState(0)

    useEffect(()=> {
        setIdentificador(props.keyDoPerfil)
    }, [props.keyDoPerfil])

    useEffect (()=> {

        document.addEventListener("keydown", onTeclaPressionada)

        function onTeclaPressionada(event) {
            if(event.code === "ArrowLeft") {
                onClickNaoGostei()
            }
        }

        return () => {
            document.removeEventListener('keydown', onTeclaPressionada) 
        }
        
    })

    const onClickNaoGostei = () => {
        const body = {
            "id": `${identificador}`,
	        "choice": false
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
        <Botao onClick={onClickNaoGostei}>X</Botao>
    )
}

export default BotaoNaoGostei