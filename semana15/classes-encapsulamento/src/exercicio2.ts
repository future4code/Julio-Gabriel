class Transaction {
    private date: string
    private value: number
    private description: string

    constructor(date: string, value: number, description: string) {
        this.date = date
        this.value = value
        this.description = description
    }

    public getDate() : string {
        return this.date
    }

    public getValue() : number {
        return this.value
    }

    public getDescription() : string {
        return this.description
    }
}

export class UserAccount {
    private cpf: string
    private name: string
    private age: number
    private balance: number = 0
    private transactions: Transaction[] = []

    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf
        this.name = name
        this.age = age
    }

    public getName() : string {
        return this.name
    }

    public getCpf() : string {
        return this.cpf
    }

    public getAge() : number {
        return this.age
    }

    public getBalance() : number {
        return this.balance
    }

    public getTransactions() : Transaction[] {
        return this.transactions
    }
}

const deposito: Transaction = new Transaction("31/08/2020", 10, "Depósito de Dinheiro")
const julio: UserAccount = new UserAccount("123.123.123-12", "Julio", 23)

console.log(deposito)
console.log(julio)