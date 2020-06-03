let kelvin = ((77-32) * 5/9) + 273.15
console.log("a. " + kelvin + "°K" )

let fahrenheit = ( (80) * 9/5) + 32
console.log("b. " + fahrenheit + "°F")

fahrenheit = ((30) * 9/5) + 32
kelvin = ((fahrenheit - 32) * 5/9) +273.15
console.log("c. " + fahrenheit + "°F")
console.log("c. " + kelvin + "°K" )

let celsius = prompt("Digite a temperatura em °C")
celsius2 = Number(celsius)
fahrenheit = ((celsius2) * 9/5) + 32
kelvin = ((fahrenheit - 32) * 5/9) +273.15
console.log("d. " + fahrenheit + "°F")
console.log("d. " + kelvin + "°K" )