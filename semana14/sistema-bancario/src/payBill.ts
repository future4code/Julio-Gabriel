import { readDatabase, userCount, writeToDatabase, transaction } from './index'
import moment from 'moment'

const allAccounts: userCount[] = readDatabase()
const description: string = process.argv[2]
const value: number = Number(process.argv[3])
const name: string = process.argv[4]
const cpf: string = process.argv[5]
const date: number = process.argv.length === 6 ? moment().unix() : moment(`${process.argv[6]}`, "DD-MM-YYYY").unix()

const payBill = (date: number, description: string, value: number, name: string, cpf: string) : void => {
    let balance: boolean = false
    let validBalance: boolean = false
    const today = moment().unix()

    if (today < date) {
        allAccounts.forEach((account) => {
                if (account.name === name && account.cpf === cpf) {
                    balance = true

                    if (account.balance >= value) {
                        validBalance = true

                        const newTransaction: transaction = {
                            value: -value,
                            date: date,
                            description: description
                        }
            
                        account.extract.push(newTransaction)
                    }
                }      
        })
        if (balance === false) {
            console.log("Não foi encontrado nenhuma conta com este nome e CPF.")
        } else if (validBalance === false) {
            console.log("Seu saldo é insuficiente")
        } else {
            writeToDatabase(allAccounts)
        }
    } else if (today > date) {
        console.log("A data que você inseriu é inferior a data de hoje")
    }     
}

payBill(date, description, value, name, cpf)