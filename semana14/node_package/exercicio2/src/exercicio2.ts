const operacao : string = process.argv[2]
const valor1: number = Number(process.argv[3])
const valor2: number = Number(process.argv[4])

let resultado: number | undefined

switch(operacao){
	case "add":
        resultado = valor1 + valor2
		break;
	case "sub":
		resultado = valor1 - valor2
        break;
    case "mult":
        resultado = valor1 * valor2
        break;
    case "div":
        resultado = valor1 / valor2
        break;
}

if (process.argv.length === 5) {
    console.log("\x1b[32m",`"Resposta: ${resultado}"`)
} else if (process.argv.length < 5) {
    console.log("\x1b[32m", "Siga o exemplo:")
    console.log("\x1b[32m", "Caso queira fazer uma soma utilize: npm run start add 1 2")
    console.log("\x1b[32m", "Caso queira fazer uma subtração utilize: npm run start add 2 1")
    console.log("\x1b[32m", "Caso queira fazer uma multiplicação utilize: npm run start add 2 1")
    console.log("\x1b[32m", "Caso queira fazer uma divisão utilize: npm run start add 2 1")
} 

