/* 3)a) Não, pois é exatamente o tipo que retorna da API, teriamos apenas erro de tipagem se viesse 
um outro tipo de resposta. */

/* 3)b) Fazemos isso para garantir que a respoata que veio da API está conforme esperavamos para não quebrar a 
nossa aplicação. */

import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/"

type subscriber = {
    id: string,
    name: string,
    email: string,
}

const getAllSubscribers = async () : Promise<subscriber[]> => {
    const subscribers = await axios.get(`${baseUrl}subscribers/all`)
    return subscribers.data
}

const main = async () : Promise<void> => {
    try {
        console.log(await getAllSubscribers())
    } catch (error){
        console.log(error.response.data)
    }
}

main()