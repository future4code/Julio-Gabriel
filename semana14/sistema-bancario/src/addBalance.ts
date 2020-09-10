import { readDatabase, userCount, writeToDatabase, transaction } from './index'
import moment from 'moment'

const allAccounts: userCount[] = readDatabase()
const name: string = process.argv[2]
const cpf: string = process.argv[3]
const value: number = Number(process.argv[4])

const addBalance = (name: string, cpf: string, value: number) : void => {
    let balance: boolean = false

    allAccounts.forEach((account) => {
        if (account.name === name && account.cpf === cpf) {
            balance = true
            account.balance = account.balance + value

            const newTransaction: transaction = {
                value: value,
                date: moment().unix(),
                description: "Depósito de dinheiro"
            }

            account.extract.push(newTransaction)
        }
    })

    if (balance === false) {
        console.log("Não foi encontrado nenhuma conta com este nome e CPF.")
    } else {
        writeToDatabase(allAccounts)
    }
}

addBalance(name, cpf, value)