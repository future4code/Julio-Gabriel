/* Exercícios de interpretação de código

Exercício 1) 
    O código recebe um número do prompt de comando e guarda numa variável, depois é feito um cast de string para number
    e guarda o valor e tipo do cast numa outra variável. Então ele testa uma condição que é: pega o resultado da divisão
    por 2 da variável que guardou o valor e tipo de cast e verifica se a sobra da divisão foi 0. Se for 0 quer dizer que
    o número é par e imprime no console Passou no teste, se sobrou outro número quer dizer que é impar e apararece a 
    mensagem que Não passou no teste.

Exercício 2)
    a. O código acima serve para verificar o preço de uma fruta que você digitou.
    b. O preço da fruta Maçã é R$ 2.25
    c. Eu pagaria R$24,55.
    d. O preço da fruta Pêra é R$ 5

Exercício 3)
    Haveria um erro sendo apontado no terminal, pois foi criada uma variável em um escopo local, e depois usa-se essa
    variável no escopo global para exibir uma mensagem no terminal.

*/

/* Exercícios de escrita de código */

// Exercício 4)

// a) Valores iguais exibiu o último valor igual inserido, ou seja, o valor da variável valor2 na frente.

/* 

const valor1 = prompt("Digite um primeiro valor")
const valor2 = prompt("Digite um segundo valor")

if (valor1 > valor2) {
    console.log(valor1, valor2)
} else {
    console.log(valor2, valor1)
}

*/

// b) Valores iguais exibiu todos os números novamente.

/*

const valor1 = prompt("Digite um primeiro valor")
const valor2 = prompt("Digite um segundo valor")
const valor3 = prompt("Digite um terceiro valor")

if (valor1 > valor2) {
    if (valor2 > valor3) {
        console.log(valor1, valor2, valor3)
    } else if (valor1 > valor3) {
        console.log(valor1, valor3, valor2)
    } else {
        console.log(valor3, valor1, valor2)
    }
}  else if (valor2 > valor3) {
        if (valor1 > valor3) {
            console.log(valor2, valor1, valor3)
        } else  {
            console.log(valor2, valor3, valor1)
        }
    } else {
        console.log(valor3,valor2, valor1)
}

*/

// c)

/*

const valor1 = prompt("Digite um primeiro valor")
const valor2 = prompt("Digite um segundo valor")
const valor3 = prompt("Digite um terceiro valor")

if ((valor1 === valor2) && (valor2 ===valor3) ) {
    alert("Digite pelo menos um valor diferente")
}

if (valor1 > valor2) {
    if (valor2 > valor3) {
        console.log(valor1, valor2, valor3)
    } else if (valor1 > valor3) {
        console.log(valor1, valor3, valor2)
    } else {
        console.log(valor3, valor1, valor2)
    }
}  else if (valor2 > valor3) {
        if (valor1 > valor3) {
            console.log(valor2, valor1, valor3)
        } else  {
            console.log(valor2, valor3, valor1)
        }
    } else {
        console.log(valor3,valor2, valor1)
}

*/

// Exercício 5

// a) https://drive.google.com/file/d/19VUCgG-dxPTQIfE5sWzK6ODzNpgvfGZk/view?usp=sharing

// b)

/*

const ossos = prompt("Possuem ossos formando seu esqueleto?")

if (ossos === "sim") {
    const pelos = prompt("Possuem pelos?")
    if (pelos === "sim") {
        const racionais = prompt("São racionais?")
        if (racionais === "sim") {
            console.log("É um ser humano")
        } else {
            console.log("É um mamífero não humano")
        }
    } else {
        const penas = prompt("Possuem penas?")
        if (penas === "sim") {
            console.log("É uma ave")
        } else {
            const animalTerreste = prompt("São animais terrestres?")
            if (animalTerreste === "sim") {
                const primeiraParteDaVida = prompt("Passaram a primeira parte da vida em ambiente aquático?")
                if (primeiraParteDaVida === "sim") {
                    console.log("É um anfíbio")
                } else {
                    console.log("É um reptíl")
                }
            } else {
                console.log("É um peixe")
            }
        }
    }
} else {
    console.log("É um animal invertebrado")
}

*/