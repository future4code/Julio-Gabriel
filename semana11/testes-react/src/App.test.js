import React from "react";
import { render, fireEvent} from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect"

const criaTarefa = () => {
    const utils = render(<App />)

        const input = utils.getByPlaceholderText('Novo post')

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        const button = utils.getByText(/Adicionar/)

        fireEvent.click(button)

        return utils 
}

describe("Ao criar um post", () => {

    test("Deve aparecer na tela, com o mesmo texto", () => {

        const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText('Novo post')

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        const button = getByText(/Adicionar/)

        fireEvent.click(button)

        expect(getByText(/post teste/)).toBeInTheDocument()

    })

    test("duas vezes, deve aparece as duas tarefas", () => {

        const {getByPlaceholderText, getByText, getByTestId} = render(<App />)

        const input = getByPlaceholderText('Novo post')
        const button = getByText(/Adicionar/)

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        fireEvent.click(button)

        fireEvent.change(input, {
            target: {
                value: 'post teste 2'
            }
        })

        fireEvent.click(button)

        expect(getByText('post teste')).toBeInTheDocument()
        expect(getByText('post teste 2')).toBeInTheDocument()
    })
})

describe("Quando curtir um post", () => {
    test("O texto do botão deve alterar para descurtir", () => {
        const {getByTestId} = criaTarefa()

        const post = getByTestId('like-button')

        fireEvent.click(post)

        expect(post).toHaveTextContent('Descurtir')
    })
})

describe("Quando apagar um post", () => {
    test("O post deve sumir da tela", () => {
        const {getByTestId} = criaTarefa()

        const post = getByTestId('delete-button')

        fireEvent.click(post)

        expect(post).not.toBeInTheDocument()
    })
})

test("Quando o usuário digita e clica em criar tarefa, o input deve ser limpo", () => {
    const {getByPlaceholderText, getByText} = render(<App />)

        const input = getByPlaceholderText('Novo post')

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        const button = getByText(/Adicionar/)

        fireEvent.click(button)

    expect(input).toHaveValue('')
})

test("Quando não tiver nenhum post deve aparecer uma mensagem dizendo que não há Nenhum Post", () => {
    const {getByTestId} = render(<App />)

    const mensagemPost = getByTestId('mensagem')

    expect(mensagemPost).toBeInTheDocument()
})

test("Quando criar uma tarefa deve sumir a mensagem dizendo que não há nenhum post", () => {
    const {queryByTestId} = criaTarefa()

    const mensagemPost = queryByTestId('mensagem')

    expect(mensagemPost).not.toBeInTheDocument()

})

test("Quando tiver pelo menos um post deve aparecer uma mensagem dizendo quantos post possuem", () => {
    const {getByText} = criaTarefa()

    const contagem = getByText(/Quantidade de posts: 1/)

    expect(contagem).toHaveTextContent(/Quantidade de posts: 1/)
})

test("Quando não tiver nenhum post deve sumir a mensagem que informa a quantidade de posts", () => {
    const {queryByTestId} = render(<App />)
    
    const mensagemErro = queryByTestId('erro')
    
    expect(mensagemErro).not.toBeInTheDocument()
})

test("Quando o usuário digitar o campo vazio e clicar em adicionar aparece uma mensagem dizendo que não é permitido", () => {
    const {getByText, getByTestId, getByPlaceholderText} = render(<App />)

    const input = getByPlaceholderText('Novo post')
    const button = getByText(/Adicionar/)

    fireEvent.change(input, {
        target: {
            value: ''
        }
    })

    fireEvent.click(button)

    const mensagemErro = getByTestId('erro')

    expect(mensagemErro).toBeInTheDocument()
})