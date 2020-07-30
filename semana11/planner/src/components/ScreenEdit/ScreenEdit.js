import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useInput from '../../hooks/useInput'

function ScreenEdit(props) {

    const {form, onChange, resetInput} = useInput({
        task: "",
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
        <form onSubmit={handleSave}>
            {props.textDaTarefa}
            <input 
                name="task"
                type="text"
                value={form.task}
                onChange={handleInputChange}
                data-testid="editainput"
                required
            />
            <select name="dayOfWeek" value={form.dayOfWeek} onChange={handleInputChange} data-testid="editaselect" required>
                <option value="">Selecione um dia da semana</option>
                <option value="Domingo">Domingo</option>
                <option value="Segunda">Segunda-feira</option>
                <option value="Terca">Terça-feira</option>
                <option value="Quarta">Quarta-feira</option>
                <option value="Quinta">Quinta-feira</option>
                <option value="Sexta">Sexta-Feira</option>
                <option value="Sabado">Sábado</option>
            </select>
            <button>Editar Tarefa</button>
            <button onClick={() => props.fechaTela()}>Cancelar</button>
        </form>
    )
}

export default ScreenEdit