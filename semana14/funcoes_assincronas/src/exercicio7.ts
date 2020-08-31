import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/"

type subscriber = {
    id: string,
    name: string,
    email: string,
}

type notification = {
    id: string
    subscriberId: string
    message: string
}

const getAllSubscribers = async () : Promise<subscriber[]> => {
    const subscribers = await axios.get(`${baseUrl}subscribers/all`)
    return subscribers.data
}

// Exercicio 7) a)
const newSubscriber = async (name: string, email: string) : Promise<void> => {
    await axios.put(`${baseUrl}subscribers`, {
            name: name,
            email: email
    })
}

// Exercicio 7) b)
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


//Exercício 7)b)
const createNewsAndSendNotification = async () : Promise<void> => {
    try {
        await axios.put(`${baseUrl}news`, {
            title: "Criando uma notícia para o exercício 7",
            content: "Criando uma notícia para o exercício 7, porque sim",
            date: Date.now()
        })
        
        const subscribers: subscriber[] = await getAllSubscribers()

        await sendNotification(subscribers, "Testando notificações para o exercício 7")
    } catch (error) {
        console.log(error.response.data)
    }
}

// Exercício 7) c)
const getAllNotifications = async () : Promise<notification[]> => {
    const subscribers: subscriber[] = await getAllSubscribers()

    let promiseAllNotification = []

    for(let subscriber of subscribers) {
        promiseAllNotification.push(
            axios.get(`${baseUrl}subscribers/${subscriber.id}/notifications/all`)
        )
    }

    const notificationsSubscribers = await Promise.all(promiseAllNotification)
    
    const notification = notificationsSubscribers.map((res) => res.data)

    return notification
} 

const main = async () : Promise<void> => {
    try {
        //Abaixo função do exercício 7) a)
        //await newSubscriber("Joao do Teste", "joaodoteste@lbn.com")

        //Abaixo função do exercício 7) b)
        //await createNewsAndSendNotification()

        //Abaixo função do exercício 7) c)
        console.log(await getAllNotifications())
    } catch (error){
        console.log(error.response.data)
    }
}

main()