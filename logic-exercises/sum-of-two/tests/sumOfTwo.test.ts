import { sumOfTwo } from '../src/index'

describe("Testa a função de soma de dois", () => {
    test("Deve retornar [0, 1]", () => {
        expect.assertions(1)

        const array: number[] = [2, 7, 11, 15]

        const result: number[] = sumOfTwo(array, 9)
    
        expect(result).toEqual([0, 1])
    })

    test("Deve retornar [1, 3]", () => {
        expect.assertions(1)

        const array: number[] = [4, 5, 10, 12, 21]

        const result: number[] = sumOfTwo(array, 17)
    
        expect(result).toEqual([1, 3])
    })
})