/* 1) a) type prato = {
    nome: string,
    custo: number,
    valorDeVenda: number
    ingredientes: string[]
}

const prato1: prato = {
    nome: "Prato 1",
    custo: 10,
    valorDeVenda: 20,
    ingredientes: ["Ingrediente 1", "Ingrediente 2"]
}

const prato2: prato = {
    nome: "Prato 2",
    custo: 15,
    valorDeVenda: 30,
    ingredientes: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"]
}

const prato3: prato = {
    nome: "Prato 3",
    custo: 20,
    valorDeVenda: 40,
    ingredientes: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3", "Ingrediente 4"]
}

const pratos: prato[] = [prato1, prato2, prato3]

function cadastrarPrato(pratos: prato[], novoPrato: prato) : prato[] {
    pratos.push(novoPrato)
    return pratos
}

const prato4: prato = {
    nome: "Prato 4",
    custo: 30,
    valorDeVenda: 60,
    ingredientes: ["Ingrediente 1"]
}

console.log(cadastrarPrato(pratos, prato4), pratos) */

/* 1) b) 

type prato = {
    nome: string,
    custo: number,
    valorDeVenda: number
    ingredientes: string[]
}

const prato1: prato = {
    nome: "Prato 1",
    custo: 10,
    valorDeVenda: 20,
    ingredientes: ["Ingrediente 1", "Ingrediente 2"]
}

const prato2: prato = {
    nome: "Prato 2",
    custo: 15,
    valorDeVenda: 30,
    ingredientes: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"]
}

const prato3: prato = {
    nome: "Prato 3",
    custo: 20,
    valorDeVenda: 40,
    ingredientes: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3", "Ingrediente 4"]
}

const pratos: prato[] = [prato1, prato2, prato3]

function buscaPrato(nome: string) : number{
    let precoDoPrato: number | undefined

    pratos.filter((prato) => {
        if (prato.nome === nome) {
            precoDoPrato = prato.valorDeVenda
        }
    })

    return precoDoPrato
}

console.log(buscaPrato("Prato 1")) */

/* 1) c)

type prato = {
    nome: string,
    custo: number,
    valorDeVenda: number
    ingredientes: string[]
}

type venda = {
    nome: string,
    valorDeVenda: number,
    quantidade: number,
    lucroDaVenda: number
}

const prato1: prato = {
    nome: "Prato 1",
    custo: 10,
    valorDeVenda: 20,
    ingredientes: ["Ingrediente 1", "Ingrediente 2"]
}

const prato2: prato = {
    nome: "Prato 2",
    custo: 15,
    valorDeVenda: 30,
    ingredientes: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"]
}

const prato3: prato = {
    nome: "Prato 3",
    custo: 20,
    valorDeVenda: 40,
    ingredientes: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3", "Ingrediente 4"]
}

const pratos: prato[] = [prato1, prato2, prato3]
const vendas: venda[] = []

function vendePrato(nome: string, quantidade: number) : venda[] {
    pratos.filter((prato) => {
        if (nome === prato.nome) {
            const venda: venda = {
                nome: prato.nome,
                valorDeVenda: prato.valorDeVenda * quantidade,
                quantidade: quantidade,
                lucroDaVenda: (prato.valorDeVenda *quantidade) - (prato.custo * quantidade)
            }
            vendas.push(venda)
        }
    })
    return vendas
}

console.log(vendePrato("Prato 1", 2)) 

*/

//1) d)

type prato = {
    nome: string,
    custo: number,
    valorDeVenda: number
    ingredientes: string[]
}

type venda = {
    nome: string,
    valorDeVenda: number,
    quantidade: number,
    lucroDaVenda: number
}

const prato1: prato = {
    nome: "Prato 1",
    custo: 10,
    valorDeVenda: 20,
    ingredientes: ["Ingrediente 1", "Ingrediente 2"]
}

const prato2: prato = {
    nome: "Prato 2",
    custo: 15,
    valorDeVenda: 30,
    ingredientes: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"]
}

const prato3: prato = {
    nome: "Prato 3",
    custo: 20,
    valorDeVenda: 40,
    ingredientes: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3", "Ingrediente 4"]
}

const pratos: prato[] = [prato1, prato2, prato3]
const vendas: venda[] = []

function vendePrato(nome: string, quantidade: number) : venda[] {
    pratos.filter((prato) => {
        if (nome === prato.nome) {
            const venda: venda = {
                nome: prato.nome,
                valorDeVenda: prato.valorDeVenda * quantidade,
                quantidade: quantidade,
                lucroDaVenda: (prato.valorDeVenda *quantidade) - (prato.custo * quantidade)
            }
            vendas.push(venda)
        }
    })
    return vendas
}

vendePrato("Prato 1", 2)
vendePrato("Prato 2", 1)

function calculaLucro(vendas: venda[]) : number {
    let resultado: number = 0

    vendas.forEach((venda) => {
        resultado = resultado + venda.lucroDaVenda
    })

    return resultado
}

console.log(calculaLucro(vendas))