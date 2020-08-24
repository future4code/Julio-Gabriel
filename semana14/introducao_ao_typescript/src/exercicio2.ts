/*1) a)

function obterEstatisticas(numeros: number[]) : {maior: any, menor: any, media: number} {
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
} */

/*1) b) 

function obterEstatisticas(numeros: number[]) : {maior: number, menor: number, media: number} {
    const numerosOrdenados : number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma: number = 0

    for (let num: number | undefined of numeros) {
        soma += num
    }

    type estatistica = {
        maior: number,
        menor: number,
        media: number
    }

    const estatisticas: estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

 */

/* 1) c)

type amostraDeDados = {
    numeros: [21, 18, 65, 44, 15, 18]
    obterEstatisticas: (numeros: number[]) => {maior: number, menor: number, media: number}
}

function obterEstatisticas(numeros: number[]) : {maior: number, menor: number, media: number} {
    const numerosOrdenados : number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma: number = 0

    for (let num: number | undefined of numeros) {
        soma += num
    }

    type estatistica = {
        maior: number,
        menor: number,
        media: number
    }

    const estatisticas: estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
} */

