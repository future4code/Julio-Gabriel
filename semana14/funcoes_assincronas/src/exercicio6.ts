/* 6) a) Executa todas as promises que estiverem no array que é passado como parâmetro ao mesmo tempo e retorna um array
com os resultados caso todos forem executadas corretamente, caso ocorra algum erro em uma das promises ele para de executar
e informa o erro da primeira promise que deu erro. */

/* 6) b) Ele enviará as notificações para todos os usuários ao mesmo tempo, ao contrário o outro método, que enviava uma
notificação e esperava a resposta para enviar outra notificação */

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

const sendNotification = async (subscribers: subscriber[], message: string) : Promise<void> => {
    let promiseNotification = []

    for(let subscriber of subscribers) {
        promiseNotification.push(
            axios.post(`${baseUrl}notifications/send`, {
                subscriberId: subscriber.id,
                message: message
            })
        )
    }

    await Promise.all(promiseNotification)
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