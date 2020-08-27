/* 4) a) É uma função assíncrona, pois ela conversa com uma API, ou seja nós fizemos requisições para uma API, tendo
controle apenas do ínicio da ação. Não sabemos exatamente se vamos receber o que queremos e pode dar algum problema
no meio do caminho */

import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/"

const createNews = async () : Promise<void> => {
    await axios.put(`${baseUrl}news`, {
        title: "Criando uma notícia para o exercício 4",
        content: "Criando uma notícia para o exercício 4, porque sim",
        date: Date.now()
    })
}

const main = async () : Promise<void> => {
    try {
        await createNews()
        console.log("Criei uma notícia")
    } catch (error){
        console.log(error.response.data)
    }
}

main()