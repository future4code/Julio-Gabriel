/* 1) Podemos acessar os paramêtros passados na linha de comando através da propriedade process.argv que é um array de 
string e por padrão as duas primeiras posições são o node e o caminho do arquivo e o parâmetro será o terceiro elemento 
do array, ou seja, podemos acessar usando: process.argv[2]. Para usar o process.argv devemos antes instalar o @types/node */

// 1) b) 

/* const nome: string = process.argv[2]
const idade: number = Number(process.argv[3])

console.log(`"Olá, ${nome}! Você tem ${idade} anos."`) */

// 1) c) 

const nome: string = process.argv[2]
const idade: number = Number(process.argv[3])
const idadeFuturo: number = idade + 7

if (process.argv.length === 4) {
    console.log("\x1b[32m",`"Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFuturo}"`)
} else if (process.argv.length === 3) {
    console.log("\x1b[32m", "Esperavamos dois parâmetros só recebi um, como no exemplo: npm run start 'Julio Gabriel' 23")
} else if (process.argv.length === 2) {
    console.log("\x1b[32m", "Esperavamos dois parâmetros como no exemplo: npm run start 'Julio Gabriel' 23")
}