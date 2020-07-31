import React, {useEffect, useState} from 'react'
import {ContainerViewTask, ContainerListTaskDay, ContainerTask, ItemTask, BotaoEditar, BotaoExcluir} from './StyleViewTask'
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
        <ContainerViewTask>
            {screenEdit()}
            <ContainerListTaskDay>
                <h3 data-testid="domingo">Domingo</h3>
                {listOfTasksDomingo.map((task) => {
                    return (
                        <ContainerTask key={task.id} data-testid="paidomingo">
                            <ItemTask data-testid="filhodomingo" onClick={() => props.funcaoCompletarTarefa(task)} completa={task.completa}>
                                {task.text}
                            </ItemTask>
                            <BotaoEditar onClick={() => openScreenEdit(task.id, task.text)}>Editar</BotaoEditar> 
                            <BotaoExcluir onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</BotaoExcluir>
                        </ContainerTask>
                    )
                })}
            </ContainerListTaskDay>
            <ContainerListTaskDay>
                <h3 data-testid="segunda">Segunda</h3>
                {listOfTasksSegunda.map((task) => {
                    return (
                        <ContainerTask key={task.id} data-testid="paisegunda">
                            <ItemTask data-testid="filhosegunda" onClick={() => props.funcaoCompletarTarefa(task)} completa={task.completa}>
                                {task.text}
                            </ItemTask>
                            <BotaoEditar onClick={() => openScreenEdit(task.id, task.text)}>Editar</BotaoEditar>   
                            <BotaoExcluir onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</BotaoExcluir> 
                        </ContainerTask>
                    )
                })}
            </ContainerListTaskDay>
            <ContainerListTaskDay>
                <h3 data-testid="terca">Terça</h3>
                {listOfTasksTerca.map((task) => {
                    return (
                        <ContainerTask key={task.id}>
                            <ItemTask onClick={() => props.funcaoCompletarTarefa(task)} completa={task.completa}>
                                {task.text}
                            </ItemTask>
                            <BotaoEditar onClick={() => openScreenEdit(task.id, task.text)}>Editar</BotaoEditar> 
                            <BotaoExcluir onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</BotaoExcluir>
                        </ContainerTask>   
                    )
                })}
            </ContainerListTaskDay>
            <ContainerListTaskDay>
                <h3 data-testid="quarta">Quarta</h3>
                {listOfTasksQuarta.map((task) => {
                    return (
                        <ContainerTask key={task.id}>
                            <ItemTask onClick={() => props.funcaoCompletarTarefa(task)} completa={task.completa}>
                                {task.text}
                            </ItemTask>
                            <BotaoEditar onClick={() => openScreenEdit(task.id, task.text)}>Editar</BotaoEditar>
                            <BotaoExcluir onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</BotaoExcluir>
                        </ContainerTask>    
                    )
                })}
            </ContainerListTaskDay>
            <ContainerListTaskDay>
                <h3 data-testid="quinta">Quinta</h3>
                {listOfTasksQuinta.map((task) => {
                    return (
                        <ContainerTask key={task.id}>
                            <ItemTask onClick={() => props.funcaoCompletarTarefa(task)} completa={task.completa}>
                                {task.text}                               
                            </ItemTask>
                            <BotaoEditar onClick={() => openScreenEdit(task.id, task.text)}>Editar</BotaoEditar>
                            <BotaoExcluir onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</BotaoExcluir>
                        </ContainerTask>    
                    )
                })}
            </ContainerListTaskDay>
            <ContainerListTaskDay>
                <h3 data-testid="sexta">Sexta</h3>
                {listOfTasksSexta.map((task) => {
                    return (
                        <ContainerTask key={task.id}>
                            <ItemTask onClick={() => props.funcaoCompletarTarefa(task)} completa={task.completa}>
                                {task.text}
                            </ItemTask>
                            <BotaoEditar onClick={() => openScreenEdit(task.id, task.text)}>Editar</BotaoEditar>
                            <BotaoExcluir onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</BotaoExcluir>
                        </ContainerTask>    
                    )
                })}
            </ContainerListTaskDay>
            <ContainerListTaskDay>
                <h3 data-testid="sabado">Sabado</h3>
                {listOfTasksSabado.map((task) => {
                    return (
                        <ContainerTask key={task.id}>
                            <ItemTask onClick={() => props.funcaoCompletarTarefa(task)} completa={task.completa}>
                                {task.text}
                            </ItemTask>
                            <BotaoEditar onClick={() => openScreenEdit(task.id, task.text)}>Editar</BotaoEditar>
                            <BotaoExcluir onClick={() => props.funcaoDeletarTarefa(task.id)}>Deletar</BotaoExcluir>  
                        </ContainerTask>  
                    )
                })}
            </ContainerListTaskDay>    
        </ContainerViewTask>
    )
}

export default ViewTask