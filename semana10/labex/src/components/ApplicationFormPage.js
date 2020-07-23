import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useInput from '../hooks/useInput'
import {useHistory} from 'react-router-dom'

const ContainerFormulario = styled.div
`
margin: 0 5vw;
width: 90vw;
min-height: 70vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const EntradaDeDados = styled.input
`
width: 30vw;
margin-bottom: 1vh;
`

const SelecaoDeDados = styled.select
`
width: 30vw;
margin-bottom: 1vh;
`
const Titulos = styled.label
`
width: 30vw;
font-weight: bold;
`

const EntradaDeDadosMaior = styled.input
`
width: 30vw;
height: 10vh;
margin-bottom: 1vh;
`

const BotaoCadastrar = styled.button
`
width: 10vw;
height: 5vh;
background-color: #FF4500;
border-style: none;
color: white;
`

function ApplicationFormPage() {

    const [viagens, setViagens] = useState([])
    const history = useHistory()

    const {form, onChange, resetaEntrada} = useInput({
        nome: "",
        idade: "",
        why: "", 
        profissao: "",
        pais: "",
        trip: ""
    })

    useEffect (()=> {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trips",)
        .then((response) => {
            setViagens(response.data.trips)
        })
        .catch((error) => {
            console.log(error.message)
        })      
    }, [])

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleSave = (event) => {
        onClickCadastrarCandidato()
        event.preventDefault()
    }

    const onClickHomePage = () => {
        history.push("/")
    }

    const onClickCadastrarCandidato = () => {
        const body = {
            name: form.nome,
            age: form.idade,
            applicationText: form.why,
            profession: form.profissao,
            country: form.pais
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trips/${form.trip}/apply`, body,)
        .then((response) => {
            resetaEntrada()
            alert("Você se cadastrou com sucesso")
        }).catch((error) => {
            alert("Ops, houve um erro, tente novamente mais tarde")
        })
    }

    return (
            <div>
                <form onSubmit={handleSave}>
                    <ContainerFormulario>
                        <Titulos>NOME COMPLETO:</Titulos>
                        <EntradaDeDados
                            name="nome" 
                            type="text" 
                            value={form.nome} 
                            onChange={handleInputChange}
                            title="Deve ter no mínimo 3 letras"
                            pattern={"[a-zA-Z' ']{3,}"}
                            required 
                        />    
                        <Titulos>IDADE:</Titulos>
                        <EntradaDeDados
                            name="idade" 
                            type="number"
                            min="18" 
                            value={form.idade} 
                            onChange={handleInputChange}
                            required 
                        />
                        <Titulos>PORQUE EU SOU UM BOM CANDIDATO(A)?:</Titulos>
                        <EntradaDeDadosMaior
                            name="why" 
                            type="text" 
                            value={form.why} 
                            onChange={handleInputChange}
                            title="Deve ter no mínimo 30 letras"
                            pattern={"[a-zA-Z' ']{30,}"}
                            required  
                        />
                        <Titulos>PROFISSÃO:</Titulos>
                        <EntradaDeDados
                            name="profissao" 
                            type="tex" 
                            value={form.profissao} 
                            onChange={handleInputChange}
                            title="Deve ter no mínimo 10 letras"
                            pattern={"[a-zA-Z' ']{10,}"}
                            required  
                        />
                        <Titulos>PAÍS:</Titulos>
                        <SelecaoDeDados name="pais" value={form.pais} onChange={handleInputChange} required>
                            <option value="">Selecione</option>
                            <option value="Brasil">BRASIL</option>
                            <option value="Argentina">ARGENTINA</option>
                            <option value="Uruguai">URUGUAI</option>
                        </SelecaoDeDados>
                        <Titulos>Viagem</Titulos>
                        <SelecaoDeDados name="trip" value={form.trip} onChange={handleInputChange} required>
                            <option value="">Escolha uma viagem</option>
                            {viagens.map((viagem) => {
                                return <option key={viagem.id} value={viagem.id}>{viagem.name}</option>
                            })}
                        </SelecaoDeDados>
                        <BotaoCadastrar>CADASTRAR</BotaoCadastrar>
                    </ContainerFormulario>
                </form>
                <button onClick={onClickHomePage}>VOLTAR</button>
            </div>
    )
}

export default ApplicationFormPage