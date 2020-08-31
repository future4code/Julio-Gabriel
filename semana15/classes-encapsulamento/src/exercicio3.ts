import { UserAccount } from './exercicio2'
import { JSONFileManager } from './exercicio4'

class Bank {
    private accounts: UserAccount[]
    private fileManager: JSONFileManager

    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
        this.accounts = accounts
        this.fileManager = new JSONFileManager('data.json')
    }

    public getAccounts() : UserAccount[] {
        return this.accounts
    }
    
    public getFileManger() : JSONFileManager {
        return this.fileManager
    }
}

const fileManager: JSONFileManager = new JSONFileManager('data.json')
const accounts = fileManager.readFromJson()

const atualizaBank: Bank = new Bank(accounts, fileManager)
console.log(atualizaBank.getAccounts())
console.log(atualizaBank.getFileManger()) 