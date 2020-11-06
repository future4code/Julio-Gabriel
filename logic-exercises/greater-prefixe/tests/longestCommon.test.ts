import { longestCommon } from '../src/index'

describe("Testa a função para procurar o maior prefixo comum", () => {
    test("Deve retornar fl", async () => {
        expect.assertions(1)

        const result: string = longestCommon(["flower", "flow", "flight"])
    
        expect(result).toBe("fl")
    })

    test("Deve retornar uma string vazia", async () => {
        expect.assertions(1)

        const result: string = longestCommon(["dog", "racecar", "car"])

        expect(result).toBe("")
    })

    test("Deve retornar cor", async () => {
        expect.assertions(1)

        const result: string = longestCommon(["coracao", "cor", "corona", "coreia"])

        expect(result).toBe("cor")
    })
})