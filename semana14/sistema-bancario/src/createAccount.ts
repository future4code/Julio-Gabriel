import moment from 'moment'
import { readDatabase,  writeToDatabase, userCount } from './index'

let fileDataObject: userCount[] = readDatabase()

const name: string = process.argv[2]
const cpf: string = process.argv[3]
const dateofbirth: string = process.argv[4]

const checkCpf = (cpf: string) : boolean => {
    let cpfRegistered: boolean = false

    fileDataObject.forEach((account) => {
        if (account.cpf === cpf) {
            cpfRegistered = true
        }
    })

    return cpfRegistered
}

const createAccount = (name: string, cpf: string, dateofbirth: string) : void => {
    const date = moment(`${dateofbirth}`, "DD-MM-YYYY")
    const today = moment()

    const diffInYears: number = today.diff(date, "year")

    if (!checkCpf(cpf)) {
        if (diffInYears >= 18 && checkCpf) {
            const account: userCount = {
                name: name,
                cpf: cpf,
                dateofbirth: dateofbirth,
                balance: 0,
                extract: []
            }
        
            fileDataObject.push(account)
        
            writeToDatabase(fileDataObject)
        } else {
            console.error("Você tem que possuir mais de 18 anos para criar uma conta")
        }
    } else {
        console.error("CPF já consta no nosso banco de dados, por favor informe outro")
    }
}

createAccount(name, cpf, dateofbirth)