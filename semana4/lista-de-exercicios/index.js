/* Exercício 1 - Interpretação de código

Uma função chamada conversorDeMoeda recebe um parâmetro chamadado valorEmDolar, e guarda outro valor que corresponde 
ao valor atual da cotação do dolar que vai receber do usúario através do prompt numa variável chamada cotacao e a 
função retorna a mensagem R$ e o resultado da multiplicação de valorEmDolar e cotacao, depois ele atribui o valor de
uma variável a função conversorDeMoeda com o paramêtro 100 e imprime na tela o valor da multiplicação de 100 e o valor
que o usuário digitar.

*/

/* Exercicio 2 - Interpretação de código

Uma função chamada investeDinheiro recebe dois paramêtros que são tipoDeInvestimentoe e valor. O switch fica verificando 
se o tipoDeInvestimento é igual as strings Poupança Renda Fixa, CDB, Ações e caso não são seja nenhum
deles vai imprimir uma alerta no navegador informando que o tipo de investimento é incorreto, caso seja uma das strings 
ele atribui o valor da multiplicação do parametro valor e de uma constante que depende de cada tipo de investimento para 
uma variável chamada valorAposInvestimento, por exemplo, se for poupança ele multiplica o parametro valor recebido pela 
função por 1.03 e para de verificar, caso seja Renda fixa multiplica o valor por 1.05, caso seja CDB multiplica o valor 
por 1.06 e caso seja Ações ele multiplica por 1.1. A função retorna a variavel valorAposInvestimento. Atribui e chama
a função investeDinheiro com os parametros "Ações" e 150 a variavel novoMontante e também atribui e chama a função
investeDinheiro com os parametros "TesouroDireto, 200" a varivel segundoMontante e depois imprime o resultado no console
de cada uma delas. O primeiro resultado obtido será 165, já o segundo resultado, como não existe a string Tesouto Direto
imprimirá a mensagem TIPO DE INVESTIMENTO INFORMADO INCORRETO! 

*/

/* Exercicio 3 - Interpretação de código

Existem 3 arrays, sendo um deles chamado de numeros, e outros dois de array1 e array2. Existe um laço for of que vai 
percorrer por cada elemento do array numeros e dividirá este elemento por que ele estiver por 2 e verifica se a sobra
da divisão por 2 é 0, se for zero ele adiciona este elemento para o array1, ou seja, o array1 terá apenas números pares
caso a sobra seja diferente de zero ele adiciona este elemento no array2, ou seja, o array 2 terá apenas números impares.
Depois de terminado o laço ele imprime na tela o comprimento do array números, o comprimento do array1 e o comprimento do
array2. A primeira mensagem será: Quantidade total de números 14. A segunda mensagem é: 6. A terceira mensagem é: 8.

*/

/* Exercicio 4 - Interpretação de código

Existe um array com diversos números, e duas variáveis uma chamada de numero1 e foi atribuída a ela o valor de Infinity e
outra chamada de numero2 com o valor de 0. Existe um laço for of que verifica elemento por elemento do array numeros e se
o elemento for menor que a variável numero1 ele atribui a variavel numero1 o valor do elemento e também se o elemento é
maior que o valor da variável numero2 ele atribui o valor do elemento a variável numero2, ou seja, o for of, nos da como
resultado o menor numero na variável numero1 e o maior numero na variavel numero2 do array. Depois ele imprime no console
cada a variável número1 e número dois. Imprimirá os valores -10 na primeira linha e 1590 na segunda linha.

*/

/* Exercicio 1 - Exercícios de Lógica de Programação

for of, for (let i = 0; let i <= lista.length; i++) {} e lista.forEach

Os primeiro muito utilizados em arrays que não guardam objetos em seus índices, já o último muito utilizado em arrays que
guardam objetos.

lista = [1,2,3,4,5]

for (elemento of lista) {
    console.log(elemento)
}

for (let i = 0; i <= lista.length; i++) {
    console.log(i)
}

const demonstracao = lista.forEach((elemento, index, array) => {
    console.log(elemento)
});

*/

/* Exercicio 2 - Exercícios de Lógica de Programação

a) false
b) false
c) true
d) true
e) true

*/

/* Exercício 3 - Exercícios de Lógica de Programação

O código do meu "colega" não funciona porque ele entra em loop infinito pois o valor de i permanece inalterado e as con
dições de comparação também estavam erradas. Minha resolução seria a que está abaixo:

const primeirosPares = prompt("Digite um número para descobrir os pares")

const resultado = primeirosPares*2
let i = 0

while (i < resultado) {
    if (i % 2 === 0){
        console.log(i)
    }
    i++
}

*/ 

/* Exercício 4 - Exercícios de Lógica de Programação

const a = Number(prompt("Digite o valor do lado A do triângulo"))
const b = Number(prompt("Digite o valor do lado B do triângulo"))
const c = Number(prompt("Digite o valor do lado C do triângulo"))

if (a === c) {
    if (a === b) {
        console.log("O triângulo é equilátero")
    } else {
        console.log("O triângulo é isoceles")
    }
} else if (a === b) {
    console.log("O triângulo é isóceles")
} else if (b === c) {
    console.log("O triângulo é isóceles")
} else {
    console.log("O triângulo é escaleno")
}

*/








