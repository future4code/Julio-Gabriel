import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerHomePage, Titulo, Descricao, BotaoInscricao} from './StyleHomePage'

function HomePage() {

    useEffect(() => {

        const token = window.localStorage.getItem("token")

        if (token !== null) {
            history.replace("/admin")
        }

    }, [])

    const history = useHistory()

    const onClickInscrever = () => {
        history.push("/inscricao")
    }

    return(
        <ContainerHomePage>
            <Titulo>FAÇA A VIAGEM ESPACIAL DO SEU SONHO</Titulo>
            <Descricao>FICOU INTERESSADO? PARTICIPE DO PROCESSO</Descricao>
            <BotaoInscricao onClick={onClickInscrever}>INSCREVA-SE</BotaoInscricao>
        </ContainerHomePage>
    )
    
}

export default HomePage