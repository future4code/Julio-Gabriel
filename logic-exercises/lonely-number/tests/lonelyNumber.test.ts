import { lonelyNumber } from '../src/index'

describe("Testa a função para encontrar o número que aparece uma única vez", () => {
    test("Deve retornar 1", async () => {
        expect.assertions(1)

        const array: number[] = [1, 2, 2]

        const result: number = lonelyNumber(array)
    
        expect(result).toEqual(1)
    })

    test("Deve retornar 4", async () => {
        expect.assertions(1)

        const array: number[] = [2, 2, 1, 1, 3, 3, 0, 0, 4]

        const result: number = lonelyNumber(array)
    
        expect(result).toEqual(4)
    })

    test("Deve retornar 5", async () => {
        expect.assertions(1)

        const array: number[] = [2, 2, 1, 1, 3, 5, 3, 0, 0]

        const result: number = lonelyNumber(array)
    
        expect(result).toEqual(5)
    }) 
})