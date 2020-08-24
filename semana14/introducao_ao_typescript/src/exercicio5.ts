function exercicio5(numero1: number, numero2: number) : void {

    const resultadoSoma : number = numero1 + numero2
    const resultadoSubtracao: number = numero1 - numero2
    const resultadoMultiplicacao: number = numero1 * numero2
    
    console.log("A soma desses números é:", resultadoSoma)
    console.log("A subtração desses números é:", resultadoSubtracao)
    console.log("A multiplicação desses números é:", resultadoMultiplicacao)

    if (numero1 > numero2) {
        console.log("O maior número é:", numero1)
    } else {
        console.log("O maior número é:", numero2)
    }
}

exercicio5(1,3)