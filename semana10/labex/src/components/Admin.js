import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {ContainerAdmin, ContainerSecoes, ContainerConteudo, InformacaoSecao, TituloSecao, BotaoSecoes} from './StyleAdmin'

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
            <ContainerSecoes>
                <ContainerConteudo>
                    <TituloSecao>LISTA DE VIAGENS</TituloSecao>
                    <InformacaoSecao>Aqui você vê todas as viagens e pode visualizar detalhes de uma viagem em específico e aprovar/reprovar candidatos.</InformacaoSecao>
                </ContainerConteudo>
                <BotaoSecoes onClick={onClickListaDeViagens}>Lista de Viagens</BotaoSecoes>
            </ContainerSecoes>
            <ContainerSecoes>
                <ContainerConteudo>
                    <TituloSecao>CRIAR VIAGEM</TituloSecao>
                    <InformacaoSecao>Aqui você pode criar novas viagens de modo rápido e intuitivo.</InformacaoSecao>
                </ContainerConteudo>
                <BotaoSecoes onClick={onClickCreateTripPage}>Criar Viagem</BotaoSecoes>
            </ContainerSecoes>
        </ContainerAdmin>
    )
}

export default Admin