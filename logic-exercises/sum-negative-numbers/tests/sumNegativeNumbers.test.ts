import { sumNegativeNumbers } from '../src/index'

describe("Testa a função de soma de números negativos em uma matriz ordenada", () => {
    test("Deve retornar 8", () => {
        expect.assertions(1)

        const orderedArray: number[][] = [[4,3,2,-1], [3,2,1,-1], [1,1,-1,-2], [-1,-1,-2,-3]]

        const result: number = sumNegativeNumbers(orderedArray)
    
        expect(result).toEqual(8)
    })

    test("Deve retornar 0", () => {
        expect.assertions(1)

        const orderedArray: number[][] = [[3,2], [1,0]]

        const result: number = sumNegativeNumbers(orderedArray)
    
        expect(result).toEqual(0)
    })

    test("Deve retornar 3", () => {
        expect.assertions(1)

        const orderedArray: number[][] = [[1,-1],[-1,-1]]

        const result: number = sumNegativeNumbers(orderedArray)
    
        expect(result).toEqual(3)
    })

    test("Deve retornar 1", () => {
        expect.assertions(1)

        const orderedArray: number[][] = [[-1]]

        const result: number = sumNegativeNumbers(orderedArray)
    
        expect(result).toEqual(1)
    })
})