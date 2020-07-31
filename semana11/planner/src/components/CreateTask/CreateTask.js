import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useInput from '../../hooks/useInput'
import ViewTask from '../ViewTask/ViewTask';
import {ContainerCreateTask, Entrada, Selecao, BotaoCriarTarefa} from './StyleCreateTask'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-juliogabriel'

function CreateTask() {

    const [listOfTasks, setListOfTasks] = useState([])
    const {form, onChange, resetInput} = useInput({
        task: "",
        dayOfWeek: ""
    })

    useEffect(() => {
        getListOfTasks()
    }, [])

    const getListOfTasks = () => {
        axios.get(`${baseUrl}`,)
        .then((response) => {
            setListOfTasks(response.data)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const CreateTask = () => {
        const body = {
            text: form.task, 
            day: form.dayOfWeek,
            completa: false
        }

        axios.post(`${baseUrl}`, body)
        .then((response) => {
            resetInput()
            alert("Você inseriu a tarefa com sucesso")
            getListOfTasks()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const editTask = (Identificador, Texto, Dia) => {
        const body = {
            text: Texto, 
            day: Dia
        }
        editRequestTask(body, Identificador)
    }

    const completedTask = (tarefa) => {
        const body = {
            completa: !tarefa.completa
        }
        editRequestTask(body, tarefa.id)
    }

    const editRequestTask = (body, Identificador) => {
        axios.put(`${baseUrl}/${Identificador}`, body)
        .then((response) => {
            alert("Você editou com sucesso")
            getListOfTasks()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const deleteTaskOfList = (Identificador) => {
        axios.delete(`${baseUrl}/${Identificador}`)
        .then((response) => {
            alert("Você excluiu com sucesso a tarefa")
            getListOfTasks()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }
    
    const handleSave = (event) => {
        CreateTask()
        event.preventDefault()
    }

    return (
            <ContainerCreateTask>
                <form onSubmit={handleSave}>
                    <Entrada 
                        name="task"
                        type="text"
                        placeholder="Digite aqui o nome da tarefa"
                        value={form.task}
                        onChange={handleInputChange}
                        required
                    />
                    <Selecao name="dayOfWeek" value={form.dayOfWeek} onChange={handleInputChange} data-testid="selecionadia" required>
                        <option value="">Selecione um dia da semana</option>
                        <option value="Domingo">Domingo</option>
                        <option value="Segunda">Segunda-feira</option>
                        <option value="Terca">Terça-feira</option>
                        <option value="Quarta">Quarta-feira</option>
                        <option value="Quinta">Quinta-feira</option>
                        <option value="Sexta">Sexta-Feira</option>
                        <option value="Sabado">Sábado</option>
                    </Selecao>
                    <BotaoCriarTarefa>Criar Tarefa</BotaoCriarTarefa>
                </form>
                <ViewTask 
                    listaDeTarefas = {listOfTasks}
                    funcaoDeletarTarefa = {deleteTaskOfList}
                    funcaoCliqueEditar = {editTask}
                    funcaoCompletarTarefa = {completedTask}
                />
            </ContainerCreateTask>
    )
}

export default CreateTask