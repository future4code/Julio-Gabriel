import React from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import {useHistory} from 'react-router-dom'

const ContainerEntradas = styled.div
`
width: 90vw;
height: 70vh;
margin: 0 5vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const PosicionamentoEntradas = styled.div
`
display: flex;
flex-direction: column;
font-weight: bold;
width: 15vw;
margin-bottom: 1vh;
`

const EntradaDescricao = styled.input
`
width: 15vw;
height: 10vh;
`

const BotaoCadastrar = styled.button
`
width: 10vw;
height: 5vh;
background-color: #FF4500;
border-style: none;
color: white;
`

const TituloSecao = styled.h1
`
margin: 0;
border-bottom: 1vh;
`

const BotaoAdmin = styled.button
`
margin: 0;
`

function CreateTripPage() {

    const [nome, onChangeNome] = useInput("")
    const [data, onChangeData] = useInput("")
    const [duracao, onChangeDuracao] = useInput("")
    const [descricao, onChangeDescricao] = useInput("")
    const [planeta, onChangePlaneta] = useInput("")
    const history = useHistory()

    const onClickAdmin = () => {
        history.push("/admin")
    }

    return(
        <ContainerEntradas>
            <TituloSecao>CADASTRAR NOVA VIAGEM</TituloSecao>
            <PosicionamentoEntradas>
                <label>NOME:</label>
                <input type="text" value={nome} onChange={onChangeNome}></input>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>PLANETA:</label>
                <select value={planeta} onChange={onChangePlaneta}>
                    <option value="">Selecione um planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Marte">Marte</option>
                </select>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>DATA:</label>
                <input type="text"value={data} onChange={onChangeData}></input>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>DURAÇÃO</label>
                <input type="number" value={duracao} onChange={onChangeDuracao}></input>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
                <label>DESCRIÇÃO:</label>
                <EntradaDescricao type="text" value={descricao} onChange={onChangeDescricao}></EntradaDescricao>
            </PosicionamentoEntradas>
            <PosicionamentoEntradas>
            <BotaoCadastrar>CADASTRAR</BotaoCadastrar>
            </PosicionamentoEntradas>
            <BotaoAdmin onClick={onClickAdmin}>Voltar</BotaoAdmin> 
        </ContainerEntradas>
    )
}

export default CreateTripPage