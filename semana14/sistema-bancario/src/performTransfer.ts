import { readDatabase, userCount, writeToDatabase, transaction } from './index'
import moment from 'moment'

const allAccounts: userCount[] = readDatabase()
const senderName: string = process.argv[2]
const senderCpf: string = process.argv[3]
const recipientName: string = process.argv[4]
const recipientCpf: string = process.argv[5]
const value: number = Number(process.argv[6])

const performTransfer = (senderName: string, senderCpf: string, recipientName: string, recipientCpf: string, value: number) : void => {
    let validBalance: boolean = false
    let validSender: boolean = false
    let validRecipient: boolean = false

    allAccounts.forEach((account) => {
        if (account.name === senderName && account.cpf === senderCpf) {
            validSender = true
            if (account.balance >= value) {
                validBalance= true
            }
        } else if (account.name === recipientName && account.cpf === recipientCpf) {
            validRecipient = true
        }
    })
    
    if (validBalance !== false && validRecipient !== false && validSender !== false) {
        allAccounts.forEach((account) => {
            if (account.name === senderName) {
                const newTransaction: transaction = {
                    value: -value,
                    date: moment().unix(),
                    description: "Depósito de dinheiro entre banco"
                }
    
                account.extract.push(newTransaction)
            } else if (account.name === recipientName) {
                const newTransaction: transaction = {
                    value: value,
                    date: moment().unix(),
                    description: "Depósito de dinheiro entre banco"
                }
    
                account.extract.push(newTransaction)
            }
        })

        writeToDatabase(allAccounts)
    } else if (validSender === false) {
        console.log("Não encontramos o nome e o cpf de quem está fazendo o depósito")
    } else if (validRecipient === false) {
        console.log("Não encontrams o nome e o cpf do destinátario do depósito")
    } else if (validBalance === false) {
        console.log("Seu saldo é insuficiente")
    }
}

performTransfer(senderName, senderCpf, recipientName, recipientCpf, value)