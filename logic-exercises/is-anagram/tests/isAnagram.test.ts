import { isAnagram } from '../src/index'

describe("Testa a função de verificação de anagrama", () => {
    test("Deve retornar true", () => {
        expect.assertions(1)

        const result: boolean = isAnagram("anagrama", "nagarama")
    
        expect(result).toEqual(true)
    })

    test("Deve retornar true", () => {
        expect.assertions(1)

        const result: boolean = isAnagram("gato", "toga")
    
        expect(result).toEqual(true)
    })

    test("Deve retornar false", () => {
        expect.assertions(1)

        const result: boolean = isAnagram("gato", "rato")
    
        expect(result).toEqual(false)
    }) 
})