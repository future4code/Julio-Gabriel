/* 2) a) A diferença de sintaxe de uma arrow function e uma função nomeada está que a arrow function ela recebe o async após
declarar a variável e após os parenteses devemos acrescentar => antes de abrir e fechar a chave. Já a function nomeada
o async vem antes de declarar a função e como o próprio nome sugere tem um nome pra ela e após os parenteses 
não precisa de => podemos abrir e fechar chave diretamente. */

//2) b)

import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/"

const getAllSubscribers = async () : Promise<any[]> => {
    const subscribers = await axios.get(`${baseUrl}subscribers/all`)
    return subscribers.data
}

const main = async () => {
    try {
        console.log(await getAllSubscribers())
    } catch (error){
        console.log(error.response.data)
    }
}

main()