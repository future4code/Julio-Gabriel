import fs from 'fs'
import { UserAccount } from './exercicio2'

export class JSONFileManager {
    private fileName: string

    constructor(fileName: string) {
        this.fileName = fileName
    }

    public readFromJson() : any {
        try {
            const allAccounts = fs.readFileSync(this.fileName).toString()
            return JSON.parse(allAccounts)
        } catch(error) {
            console.log(error)
            return []
        }
    }

    public writeInJson(data: any): void {
        try {
            const dataAsString: string = JSON.stringify(data, null, 3)
            fs.writeFileSync(this.fileName, dataAsString)
        } catch(error) {
            console.log(error)
        }
    }
}

const julio: UserAccount = new UserAccount("123.123.123-12", "Julio", 23)
const fileManager: JSONFileManager = new JSONFileManager('data.json')

const accounts = fileManager.readFromJson()

accounts.push(julio)

fileManager.writeInJson(accounts)