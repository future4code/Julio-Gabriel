import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useInput from '../hooks/useInput'
import {useHistory} from 'react-router-dom'
import ListCountries from './ListCountries'
import {ContainerFormulario, PosicionamentoEntradas, EntradaDeDados, SelecaoDeDados, Titulos, EntradaDeDadosMaior, 
BotaoCadastrar, BotaoVoltar} from './StyleApplicationFormPage'

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
                        <h1>Formulário de Inscrição</h1>
                        <PosicionamentoEntradas>
                            <Titulos>NOME COMPLETO:</Titulos>
                            <EntradaDeDados
                                name="nome" 
                                type="text" 
                                value={form.nome} 
                                onChange={handleInputChange}
                                title="Deve ter no mínimo 3 letras"
                                pattern={"[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ0-9' ']{3,}"}
                                required 
                            /> 
                        </PosicionamentoEntradas>   
                        <PosicionamentoEntradas>
                            <Titulos>IDADE:</Titulos>
                            <EntradaDeDados
                                name="idade" 
                                type="number"
                                min="18" 
                                value={form.idade} 
                                onChange={handleInputChange}
                                required 
                            />
                        </PosicionamentoEntradas>
                        <PosicionamentoEntradas>
                            <Titulos>PORQUE EU SOU UM BOM CANDIDATO(A)?:</Titulos>
                            <EntradaDeDadosMaior
                                name="why" 
                                type="text" 
                                value={form.why} 
                                onChange={handleInputChange}
                                title="Deve ter no mínimo 30 letras"
                                pattern={"[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ0-9' ']{30,}"}
                                required  
                            />
                        </PosicionamentoEntradas>
                        <PosicionamentoEntradas>
                            <Titulos>PROFISSÃO:</Titulos>
                            <EntradaDeDados
                                name="profissao" 
                                type="tex" 
                                value={form.profissao} 
                                onChange={handleInputChange}
                                title="Deve ter no mínimo 10 letras"
                                pattern={"[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ0-9' ']{10,}"}
                                required  
                            />
                        </PosicionamentoEntradas>
                        <PosicionamentoEntradas>
                            <Titulos>PAÍS:</Titulos>
                            <SelecaoDeDados name="pais" value={form.pais} onChange={handleInputChange} required>
                                <ListCountries />
                            </SelecaoDeDados>
                        </PosicionamentoEntradas>
                        
                        <PosicionamentoEntradas>
                            <Titulos>Viagem</Titulos>
                            <SelecaoDeDados name="trip" value={form.trip} onChange={handleInputChange} required>
                                <option value="">Escolha uma viagem</option>
                                {viagens.map((viagem) => {
                                    return <option key={viagem.id} value={viagem.id}>{viagem.name}</option>
                                })}
                            </SelecaoDeDados>
                        </PosicionamentoEntradas>
                        <PosicionamentoEntradas>
                            <BotaoCadastrar>CADASTRAR</BotaoCadastrar>
                        </PosicionamentoEntradas>
                    </ContainerFormulario>
                </form>
                <BotaoVoltar onClick={onClickHomePage}>Voltar</BotaoVoltar>
            </div>
    )
}

export default ApplicationFormPage                       