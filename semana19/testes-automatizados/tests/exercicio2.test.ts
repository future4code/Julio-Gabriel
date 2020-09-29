import { User, performPurchase } from '../src/exercicio1'

describe("Testando o UserDatabase", () => {
    const joao: User = {
        name: "João",
        balance: 200
    }

    test("Testing balance greater than value", () => {
        const result = performPurchase(joao, 50)

        expect(result).toEqual({
            ...joao,
            balance: 150
        })
    })

    test("Testing balance greater than value", () => {
        const result = performPurchase(joao, 200)

        expect(result).toEqual({
            ...joao,
            balance: 0
        })
    })

    test("Testing balance greater than value", () => {
        const result = performPurchase(joao, 250)

        expect(result).toEqual(undefined)
    })
})