const quiloWattHora = 0.05
let resultado1 = 280 * quiloWattHora
console.log ("O valor da conta de energia de uma casa com consumo de 280 kW/h é R$" + resultado1)
resultado1 = resultado1 - ((resultado1*15)/100) 
console.log("Com desconto de 15% na conta energia o novo valor a se pagar é de R$" +resultado1)

let seuConsumo = prompt("Qual o consumo em kWh em sua casa?")
let seuConsumo2 = Number(seuConsumo)
let resultado2 = seuConsumo2 * quiloWattHora
console.log("O valor da sua conta de energia com base no seu consumo é de R$" + resultado2)
let desconto = prompt("Qual a porcentagem de desconto?")
let desconto2 = Number(desconto)
resultado2 = resultado2 - ((resultado2*desconto2)/100)
console.log("Com desconto de " + desconto2 + "% na conta energia o novo valor a se pagar é de R$" + resultado2) 