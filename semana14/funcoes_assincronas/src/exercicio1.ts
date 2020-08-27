// 1) a) GET /subscribers/all, https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all
// 1) b) async function example() : Promise<any[]> {return arrayAny}
// 1) c)

import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/"

async function getAllSubscribers() : Promise<any[]> {
    const subscribers = await axios.get(`${baseUrl}subscribers/all`)
    return subscribers.data
}

const main = async () : Promise<void> => {
    try {
        console.log(await getAllSubscribers())
    }
    catch (error){
        console.log(error.response.data)
    }
}

main()