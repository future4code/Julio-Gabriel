// Exercícios de interpretação de código

// 1) a) Retornará um array sem nenhum índice
// 1) b) Retornará um array com seis índices sendo eles respectivamante 0, 1, 0, 1, 2, 3
// 1) c) Retornará um array com doze índice sendo eles respectivamente 0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5

/* 2) a) As saídas no console são do tipo number, e são elas 0, 2 e undefined, de acordo com o índice de onde estão os 
nomes e undefined porque na array não existe nenhuma Paula e sim Paulinha. */
/* 2) b) Acredito que sim, pois a função busca somente se o valor e o tipo é igual ao do valor que está dentro daquele 
índice, e se alterar para um array de números e mudar os parâmetros da chamada de função de string para um número. */

/* 3) A função adiciona o número do índice que está percorrendo na array com o a resultadoA e multiplica o resultadoB 
pelo número do índice que está percorrendo e depois adiciona estes resultados obtidos da adição e multiplacação a uma
nova array. */

/* Exercício 4) a)

const idadeAnosHumanos = Number(prompt("Quantos anos humanos o seu cachorro tem"))

let idadeDoCachorro = (a) => {
    return a*7
}

let resultado = idadeDoCachorro(idadeAnosHumanos)
console.log("A idade do seu cachorro é: ", resultado )

*/

/* Exercício 4) b)

const nome = prompt("Qual é o seu nome?")
const idade = Number(prompt("Qual a sua idade?"))
const endereco = prompt("Qual o seu endereço?")
const estudante = prompt("Você é estudante?")
let souEstudante

if (estudante === "true"){
    souEstudante = "sou estudante"
} else {
    souEstudante = "não sou estudante"
}

const mensagem = (funcNome, funcIdade, funcEndereco, funcSouEstudante) => {
    console.log("Eu sou " + funcNome +  ", tenho " + funcIdade + " anos, moro em " + funcEndereco + " e " + funcSouEstudante)
}

mensagem (nome, idade, endereco, souEstudante)

*/

/*

const ano = Number(prompt("Digite o ano para você descobrir a qual século ele pertence"))
const arrayNumerosRomano = ["I", "II", "III", "IV", "V", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XI"]

let resultado = (funcAno) => {
    return (funcAno/100)+1
}

console.log (arrayNumerosRomano)

*/

/* Exercício 5 

const numerosRomanos = ["I","II","III","IV","V","VI","VII","VIII",'IX',"X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"]
const ano = Number(prompt("Qual o ano que você quer descobrir o século?"))
let resultado
let mensagem
let indicaSeculo

let seculo = (funcAno) => {
   let funcResultado = parseInt(funcAno/100+1)
   return funcResultado
}

let converte = (funcResultado, arrayNumerosRomanos, funcIndicaSeculo) => {
    for (let i = 0 ; i < arrayNumerosRomanos.length; i++) {
        conversao = funcResultado - i
        if (conversao === 1 ){
            funcIndicaSeculo = arrayNumerosRomanos[i]
        }
    }
    return funcIndicaSeculo
}

resultado = seculo(ano)
mensagem = converte(resultado, numerosRomanos, indicaSeculo)
console.log("O ano " + ano + " pertence ao século " + mensagem)

*/

/* 6) a) 

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let numeroDeElementos = (funcArray) => {
    let funcResultado = funcArray.length
    return funcResultado
}

let resultado = numeroDeElementos(array)
console.log(resultado) 

*/

/* 6) b) 

let numero = Number(prompt("Digite um número para saber se é impar ou par"))

let par = (funcNumero) => {
    if (funcNumero%2 === 0) {
        funcPar = true
    } else {
        funcPar = false
    }
    return funcPar
}

let resultado = par(numero)
console.log(resultado) */

/* 6) c)

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let tamanho = 0

let par = (funcArray, funcTamanho) => {
    for (let i = 0; i < funcArray.length; i++) {
        if (funcArray[i] % 2 === 0) {
            funcTamanho++
        }
    }
    return funcTamanho
}

let resultado = par(array, tamanho)
console.log("A quantidade de pares do array é: " + resultado)

*/

/* 6) d) 

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let tamanho = 0
let booleana 

let par = (funcArray, funcTamanho, funcPar) => {
    for (let i = 0; i < funcArray.length; i++) {
        if (funcArray[i] % 2 === 0) {
            funcTamanho++
            funcPar = true
            console.log(funcArray[i], funcPar)   
        } else {
            funcPar = false
            console.log(funcArray[i], funcPar)
        }
    }
    return funcTamanho
}

let resultado = par(array, tamanho, booleana)
console.log("A quantidade de pares do array é: " + resultado) */








