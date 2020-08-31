/* 5) a) A requisição seria feita, mas não esperaria a resposta de sucesso ou erro da requisição, 
e continuaria a rodar as linhas abaixo do forEach. */

// 5) b)

import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/"

type subscriber = {
    id: string,
    name: string,
    email: string,
}

const getAllSubscribers = async () : Promise<subscriber[]> => {
    const subscriber = await axios.get(`${baseUrl}subscribers/all`)
    return subscriber.data
}

const sendNotification = async (subscribers: subscriber[], message: string) : Promise<void> => {
    for(let subscriber of subscribers) {
        console.log(`Estamos enviando a notificação para a/o ${subscriber.name}`)
        await axios.post(`${baseUrl}notifications/send`, {
            subscriberId: subscriber.id,
	        message: message
        })
        console.log(`Notificação enviada para a/o ${subscriber.name}`)
    }
    console.log("Todas as mensagem foram enviadas com sucesso")
}

const main = async () : Promise<void> => {
    try {
        const subscribers: subscriber[] = await getAllSubscribers()
        await sendNotification(subscribers, "Saiu nova notícia, confira já.")
    } catch (error) {
        console.log(error.response.data)
    }
}

main()