import React from 'react'
import axios from 'axios'
import { render, wait, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import App from './App'

axios.get = jest.fn().mockResolvedValue({
  data: []
})

axios.post = jest.fn().mockResolvedValue()
axios.put = jest.fn().mockResolvedValue()

describe("Renderização inicial", () => {

  test("Verifica se o input aparece na tela", () => {
    
    const { getByPlaceholderText } = render(<App />)

    const inputAdicionarTarefa = getByPlaceholderText(/Digite aqui o nome da tarefa/)

    expect(inputAdicionarTarefa).toBeInTheDocument()
  })

  test("Verifica se o select aparece na tela", () => {
    const { getByTestId } = render(<App />)

    const inputSelect = getByTestId('selecionadia')

    expect(inputSelect).toBeInTheDocument()
  })

  test("Verifica se o botão aparece na tela", () => {
    const { getByText } = render(<App />)

    const buttonCriaTarefa = getByText(/Cria/)

    expect(buttonCriaTarefa).toBeInTheDocument()

  })

  test("Verifica se a requisição da lista toda é feita", async () => {
    
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          id: 1,
          text: "Tarefa Teste 1",
          day: "Domingo"
        },
        {
          id: 2,
          text: "Tarefa Teste 2",
          day: "Segunda"
        }
      ]
    })

    const {} = render(<App />)

    expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-juliogabriel')

  })

})

describe("Cria tarefa", () => {

  test("Quando o usuário digita, o texto tem aparecer", async () => {
    const { getByPlaceholderText } = render(<App />)

    const inputAdicionarTarefa = getByPlaceholderText(/Digite aqui o nome da tarefa/)

    await userEvent.type(inputAdicionarTarefa, 'Tarefa Teste 1')
    
    expect(inputAdicionarTarefa).toHaveValue('Tarefa Teste 1')
  })

  test("Quando o usuário seleciona uma opção do select, ela tem que mudar", () => {
    const { getByTestId } = render(<App />)

    const inputSelect = getByTestId('selecionadia')

    userEvent.selectOptions(inputSelect, "Domingo")

    expect(inputSelect).toHaveValue('Domingo')
  })

  test("Quando o usuário preenche o campo e o dia selecionado e cria a tarefa", async () => {

    axios.post = jest.fn().mockResolvedValue()

    axios.get = jest.fn().mockResolvedValue({
      data: []
    })

    const { getByPlaceholderText, getByText, getByTestId } = render(<App />)

    const inputAdicionarTarefa = getByPlaceholderText(/Digite aqui o nome da tarefa/)
    const inputSelect = getByTestId('selecionadia')
    const botaoCriarTarefa = getByText(/Cria/)

    await userEvent.type(inputAdicionarTarefa, 'Tarefa Teste 1')

    userEvent.selectOptions(inputSelect, "Domingo")

    userEvent.click(botaoCriarTarefa)

    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-juliogabriel', {
      text: 'Tarefa Teste 1',
      day: 'Domingo'
    })

    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })

  })

})

describe("Edita tarefa", () => {
  test("Renderiza Botao Editar na Tela", async () => {

    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          id: 1,
          text: "Tarefa Teste 1",
          day: "Domingo"
        }
      ]
    })

    const {findByText} = render(<App />)

    const botaoEditar = await findByText(/Editar/)

    expect(botaoEditar).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-juliogabriel')
  })

  test("Clica no botão de editar tarefa", async () => {

    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          id: 1,
          text: "Tarefa Teste 2",
          day: "Domingo"
        }
      ]
    })

    axios.put = jest.fn().mockResolvedValue()

    const {findByText, findByTestId} = render(<App />)

    const botaoEditar = await findByText(/Editar/)
    userEvent.click(botaoEditar)

    const inputEditar = await findByTestId('editainput')
    await userEvent.type(inputEditar, 'Tarefa Teste 1')

    const selectEditar = await findByTestId('editaselect')
    userEvent.selectOptions(selectEditar, "Segunda")

    const botaoEnviaEdicao = await findByText(/Editar Tarefa/)
    userEvent.click(botaoEnviaEdicao)

    expect(axios.put).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-juliogabriel/1', {
      text: 'Tarefa Teste 1',
      day: 'Segunda'
    })

    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })

  })
})

describe("Deletar tarefa", () => {

  test("Quando clicar no botão de excluir", async () => {

    axios.get = jest.fn().mockResolvedValueOnce({
      data: [
        {
          id: 1,
          text: "Tarefa Teste 1",
          day: "Domingo"
        }
      ]
    }).mockResolvedValueOnce({
      data: []
    })
  
    axios.delete = jest.fn().mockResolvedValue()
  
    const {findByText, queryByText} = render(<App />)
  
    const botaoExcluir = await findByText(/Deletar/)

    userEvent.click(botaoExcluir)

    expect(axios.delete).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-juliogabriel/1')

    expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-juliogabriel')

    await wait (() => {
      expect(queryByText(/Deletar/)).not.toBeInTheDocument()
    })

    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })

  })

}) 
