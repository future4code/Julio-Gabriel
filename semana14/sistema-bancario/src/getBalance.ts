import { readDatabase, userCount } from './index'

const allAccounts: userCount[] = readDatabase()
const name: string = process.argv[2]
const cpf: string = process.argv[3]

const getBalance = (name: string, cpf: string) : void => {
    let balance: number | null = null

    allAccounts.forEach((account) => {
        if (account.name === name && account.cpf === cpf) {
            balance = account.balance
        }
    })

    if (balance !== null) {
        const balanceScreen: number = balance
        console.log(`O seu saldo é de R$${balanceScreen.toFixed(2)}`)
    } else {
        console.log("Não foi encontrado nenhuma conta com este nome e CPF.")
    }
}

getBalance(name, cpf)