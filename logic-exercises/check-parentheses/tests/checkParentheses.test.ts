import { checkParentheses } from '../src/index'

describe("Testa a função de chegam de parenteses", () => {
    test("Deve retornar true", () => {
        expect.assertions(1)

        const result: boolean = checkParentheses("()")
      
        expect(result).toEqual(true)
    })

    test("Deve retornar true", () => {
        expect.assertions(1)

        const result: boolean = checkParentheses("()[]{}")
    
        expect(result).toEqual(true)
    })

    test("Deve retornar false", () => {
        expect.assertions(1)

        const result: boolean = checkParentheses("(]")
    
        expect(result).toEqual(false)
    })

    test("Deve retornar true", () => {
        expect.assertions(1)

        const result: boolean = checkParentheses("([)]")
    
        expect(result).toEqual(false)
    })

    test("Deve retornar true", () => {
        expect.assertions(1)

        const result: boolean = checkParentheses("{[]}")
    
        expect(result).toEqual(true)
    })
})