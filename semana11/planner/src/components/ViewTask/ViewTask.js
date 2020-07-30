import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ScreenEdit from '../ScreenEdit/ScreenEdit'

function ViewTask(props) {

    const [renderizaNaTela, setRenderizaNaTela] = useState(false)
    const [idTaskEdit, setIdTaskEdit] = useState("")
    const [textTaskEdit, setTextTaskEdit] = useState("")
    const [listOfTasksDomingo, setListOfTasksDomingo] = useState([])
    const [listOfTasksSegunda, setListOfTasksSegunda] = useState([])
    const [listOfTasksTerca, setListOfTasksTerca] = useState([])
    const [listOfTasksQuarta, setListOfTasksQuarta] = useState([])
    const [listOfTasksQuinta, setListOfTasksQuinta] = useState([])
    const [listOfTasksSexta, setListOfTasksSexta] = useState([])
    const [listOfTasksSabado, setListOfTasksSabado] = useState([])
    
    useEffect(() => {
        getListOfTasksDay()
        closeScreenEdit()
    }, [props.listaDeTarefas])

    const getListOfTasksDay = () => {
        const listaDeTarefasDeDomingo = props.listaDeTarefas.filter((task) => {
            if (task.day === "Domingo") {
                return true
            } else {
                return false
            } 
        })

        const listaDeTarefasDeSegunda = props.listaDeTarefas.filter((task) => {
            if (task.day === "Segunda") {
                return true
            } else {
                return false
            }
        })

        const listaDeTarefasDeTerca = props.listaDeTarefas.filter((task) => {
            if (task.day === "Terca") {
                return true
            } else {
                return false
            }
        })

        const listaDeTarefasDeQuarta = props.listaDeTarefas.filter((task) => {
            if (task.day === "Quarta") {
                return true
            } else {
                return false
            }
        })

        const listaDeTarefasDeQuinta = props.listaDeTarefas.filter((task) => {
            if (task.day === "Quinta") {
                return true
            } else {
                return false
            }
        })

        const listaDeTarefasDeSexta = props.listaDeTarefas.filter((task) => {
            if (task.day === "Sexta") {
                return true
            } else {
                return false
            }
        })

        const listaDeTarefasDeSabado = props.listaDeTarefas.filter((task) => {
            if (task.day === "Sabado") {
                return true
            } else {
                return false
            }
        })

        setListOfTasksDomingo(listaDeTarefasDeDomingo)
        setListOfTasksSegunda(listaDeTarefasDeSegunda)
        setListOfTasksTerca(listaDeTarefasDeTerca)
        setListOfTasksQuarta(listaDeTarefasDeQuarta)
        setListOfTasksQuinta(listaDeTarefasDeQuinta)
        setListOfTasksSexta(listaDeTarefasDeSexta)
        setListOfTasksSabado(listaDeTarefasDeSabado)
        setListOfTasksDomingo(listaDeTarefasDeDomingo)
    }

    const openScreenEdit = (Identificador, Tarefa) => {
        setIdTaskEdit(Identificador)
        setTextTaskEdit(Tarefa)
        setRenderizaNaTela(true)
    }

    const closeScreenEdit = () => {
        setRenderizaNaTela(false)
    }

    const screenEdit = () => {
        if (renderizaNaTela === true) {
            return (
                <ScreenEdit
                    idDaTarefa={idTaskEdit}
                    textDaTarefa={textTaskEdit}
                    fechaTela={closeScreenEdit} 
                    funcaoCliqueEditar={props.funcaoCliqueEditar}
                />
            )
        }
    }

    return (
        <div>
            <div>
                {screenEdit()}
                <h3>Domingo</h3>
                {listOfTasksDomingo.map((task) => {
                    return (
                        <li key={task.id} data-testid="domingo">
                            {task.text}
                            <button onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</button>
                            <button onClick={() => openScreenEdit(task.id, task.text)}>Editar</button>
                        </li>    
                    )
                })}
            </div>
            <div data-testid="segunda">
                <h3>Segunda</h3>
                {listOfTasksSegunda.map((task) => {
                    return (
                        <li key={task.id}>
                            {task.text}
                            <button onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</button>
                            <button onClick={() => openScreenEdit(task.id, task.text)}>Editar</button>
                        </li>    
                    )
                })}
            </div>
            <div data-testid="terca">
                <h3>Terça</h3>
                {listOfTasksTerca.map((task) => {
                    return (
                        <li key={task.id}>
                            {task.text}
                            <button onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</button>
                            <button onClick={() => openScreenEdit(task.id, task.text)}>Editar</button>
                        </li>    
                    )
                })}
            </div>
            <div data-testid="quarta">
                <h3>Quarta</h3>
                {listOfTasksQuarta.map((task) => {
                    return (
                        <li key={task.id}>
                                {task.text}
                                <button onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</button>
                                <button onClick={() => openScreenEdit(task.id, task.text)}>Editar</button>
                        </li>    
                    )
                })}
            </div>
            <div data-testid="quinta">
                <h3>Quinta</h3>
                {listOfTasksQuinta.map((task) => {
                    return (
                        <li key={task.id}>
                                {task.text}
                                <button onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</button>
                                <button onClick={() => openScreenEdit(task.id, task.text)}>Editar</button>
                        </li>    
                    )
                })}
            </div>
            <div data-testid="sexta">
                <h3>Sexta</h3>
                {listOfTasksSexta.map((task) => {
                    return (
                        <li key={task.id}>
                                {task.text}
                                <button onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</button>
                                <button onClick={() => openScreenEdit(task.id, task.text)}>Editar</button>
                        </li>    
                    )
                })}
            </div>
            <div data-testid="sabado">
                <h3>Sabado</h3>
                {listOfTasksSabado.map((task) => {
                    return (
                        <li key={task.id}>
                                {task.text}
                                <button onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</button>
                                <button onClick={() => openScreenEdit(task.id, task.text)}>Editar</button>
                        </li>    
                    )
                })}
            </div>    
        </div>
    )
}

export default ViewTask