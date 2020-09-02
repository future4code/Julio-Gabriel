import { Client } from './Client'

export class ClientManager {
    private clients: Client[] = []

    getClientsQuantity() : number {
        return this.clients.length
    }

    registerClient(client: Client) : void {
        let findRegistrationNumber: boolean = false

        this.clients.forEach((oneClient: Client) => {
            if (oneClient.registrationNumber === client.registrationNumber) {
                findRegistrationNumber = true
            }
        })

        if (findRegistrationNumber === false) {
            this.clients.push(client)
        } else {
            console.log("O número de registro já existe no nosso cadastro")
        }
    }

    calculateTotalClient(registrationNumber: number) : number {
        const findClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber
        })

        if (findClient) {
            return findClient.calculateBill()
        } else {
            return 0
        }
    }

    calculateTotalIncome() : number {
        let valueTotal: number = 0

        this.clients.forEach((client) => {
            valueTotal += client.calculateBill()
        })

        return valueTotal
    }

    deleteUser(registrationNumber: number) : void {
        let indexUser: null | number = null

        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].registrationNumber === registrationNumber) {
              indexUser = i
            }
        }

        if (indexUser !== null) {
            this.clients.splice(indexUser, 1)
        } else {
            console.log("Usuário não encontrado")
        }
    }

    printClients() : void {
        this.clients.forEach((client: Client) => {
            console.log(`
                ${client.name} - ${client.registrationNumber} - ${client.consumedEnergy} - R$${client.calculateBill().toFixed(2)}
            `)
        })
    } 
}