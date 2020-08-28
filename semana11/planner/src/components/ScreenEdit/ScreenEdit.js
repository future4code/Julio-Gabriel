import React from 'react'
import useInput from '../../hooks/useInput'
import {ContainerScreenEdit, Entrada, Selecao, BotaoEditarTarefa, BotaoCancelar} from './StyleScreenEdit'

function ScreenEdit(props) {

    const {form, onChange} = useInput({
        task: `${props.textDaTarefa}`,
        dayOfWeek: ""
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }
    
    const handleSave = (event) => {
        event.preventDefault()
        props.funcaoCliqueEditar(props.idDaTarefa, form.task, form.dayOfWeek)
    }

    return (
        <ContainerScreenEdit>
            <form onSubmit={handleSave}>
                <Entrada 
                    name="task"
                    type="text"
                    value={form.task}
                    onChange={handleInputChange}
                    data-testid="editainput"
                    required
                />
                <Selecao name="dayOfWeek" value={form.dayOfWeek} onChange={handleInputChange} data-testid="editaselect" required>
                    <option value="">Selecione um dia da semana</option>
                    <option value="Domingo">Domingo</option>
                    <option value="Segunda">Segunda-feira</option>
                    <option value="Terca">Terça-feira</option>
                    <option value="Quarta">Quarta-feira</option>
                    <option value="Quinta">Quinta-feira</option>
                    <option value="Sexta">Sexta-Feira</option>
                    <option value="Sabado">Sábado</option>
                </Selecao>
                <BotaoEditarTarefa>Editar Tarefa</BotaoEditarTarefa>
                <BotaoCancelar onClick={() => props.fechaTela()}>Cancelar</BotaoCancelar>
            </form>
        </ContainerScreenEdit>
    )
}

export default ScreenEdit