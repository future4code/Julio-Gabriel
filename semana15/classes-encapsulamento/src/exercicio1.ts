/* 1) a) O construtor serve para executar ações que são executadas ao criar uma instância da classe. E para ser chamado
basta usar construtor {}. Passar os valores dos parâmetros que estiverem dentro do construtor na hora de instanciar
uma classe. */

// 1) b) Foi chamada uma única vez.

/* type Transaction = {
    date: string,
    value: number,
    description: string
}

class UserAccount {
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
} 

const julio: UserAccount = new UserAccount("123.123.123-12", "Julio", 23) */

// 1) c) Para ter acesso a propriedades privadas, basta apenas que utilizemos de getters.

type Transaction = {
    date: string,
    value: number,
    description: string
}

class UserAccount {
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
}

const julio: UserAccount = new UserAccount("123.123.123-12", "Julio", 23)
console.log(julio.getName())