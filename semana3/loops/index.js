// Exercícios de interpretação de código

/* Exercício 1

O código abaixo está fazendo um loop que começara do zero e irá parar quando a variável chegar em 14. O resultado 
apresentado no console é 105.

*/

/* Exercício 2

a. O comando push adiciona um novo índice com o seu valor vindo do item que tiver a sobra igual a zero resultante 
da divisão do item pela variável numero no array chamada novaLista.

b. Seria impreso a array chamada novaLista com 4 índices e o valor de cada índice respectivamente: 10, 15, 25, 30

c. Seria impresso a array chamada novaLista com 6 índices e o valor de cada índice respectivamente: 12, 15, 18, 21, 27, 30
   Seria impresso a array chamada novaLista com 1 índico e o seu valor é de 12.

*/

// Exercícios de escrita de código

// Exercício 1

/* 
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumero = 0
let menorNumero

for(let numero of arrayOriginal) {
   if (numero > maiorNumero){
        maiorNumero = numero
        menorNumero = maiorNumero

   } else if (numero < menorNumero ) {
      menorNumero = numero
   }
}

console.log("O maior número é " + maiorNumero + " e o menor é " + menorNumero)

*/

/* b

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []

for(let numero of arrayOriginal) {
    novoArray.push (numero / 10)
}

console.log(novoArray)

*/

/* c

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []

for(let numero of arrayOriginal) {
   if (numero%2 === 0) {
    novoArray.push (numero)
   }
}

console.log(novoArray)

*/

/* d

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []
let i= 0

for(let numero of arrayOriginal) {
    novoArray.push ('O elemento do index ' + i + ' é, ' + numero)
    if (i <= arrayOriginal.length) {
        i++
    }
}
console.log(novoArray)

*/

// Desafios

/* Desafio 1

Se digitar 4, parece que aparece quatro linhas, e a cada linha vai acrescentando um zero em relação a linha anterior, ou
seja, na primeira linha apareceria apenas um 0, na segundo linha aparece dois 0, na terceira linha apareceria três
0 e a quarta linha apareceria quatro 0.

*/

/* Desafio 2

let numeroMestre = prompt("O primeiro jogador deve escolher um número sem que o jogador 2 veja, insira agora o valor")
let numeroChutado
let tentativas = 0

if (Number(numeroMestre) >= 0) {
    console.log("Vamos jogar!")
}

for (Number(numeroMestre) >= 0; numeroMestre !== numeroChutado; tentativas++) {
    numeroChutado = prompt("Jogador 2, chute um número")
    console.log("O número chutado foi: " +numeroChutado)
    if (Number(numeroMestre) > Number(numeroChutado)) {
        console.log("O número escolhido é maior")
    } else if (Number(numeroMestre) < Number(numeroChutado)) {
        console.log("O número escolhido é menor")
    }
}

if (Number(numeroMestre) === Number(numeroChutado) ) {
    console.log("Acertou")
    console.log("O número de tentativas foi: " + tentativas)
}

*/
