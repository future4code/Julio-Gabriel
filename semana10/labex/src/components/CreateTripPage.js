import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerCriacaoDeViagens = styled.div
`
margin: 0 5vw;
width: 90vw;
height: 30vh;
display: flex;
flex-direction: column;
`

const ContainerEntradas = styled.div
`
margin-bottom: 1vh;
`


function CreateTripPage() {
    return(
        <ContainerCriacaoDeViagens>
            <h1>CADASTRAR NOVA VIAGEM</h1>
            <ContainerEntradas>
                <label>NOME:</label>
                <input></input>
                <label>PLANETA:</label>
                <select>
                    <option>Selecione um planeta</option>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Marte</option>
                </select>
                <label>DATA:</label>
                <input></input>
                <label>DURAÇÃO</label>
                <input></input>
            </ContainerEntradas>
            <ContainerEntradas>
                <label>DESCRIÇÃO:</label>
                <input></input>
            </ContainerEntradas>
        </ContainerCriacaoDeViagens>
    )
}

export default CreateTripPage