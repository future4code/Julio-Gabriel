import { validateCharacter } from '../src/exercicio1'

describe("Function test validateCharacter", () => {
    test("Should return false for empty name", () => {
        const character = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        })
      
        expect(character).toBe(false)
    })

    test("Should return false for life undefined", () => {
        const character = validateCharacter({
            name: "Character",
            life: undefined,
            strength: 300,
            defense: 500,
        })
      
        expect(character).toBe(false)
    })

    test("Should return false for strength undefined", () => {
        const character = validateCharacter({
            name: "Character",
            life: 1500,
            strength: undefined,
            defense: 500,
        })
      
        expect(character).toBe(false)
    })

    test("Should return false for defense undefined", () => {
        const character = validateCharacter({
            name: "Character",
            life: 1500,
            strength: 300,
            defense: undefined,
        })
      
        expect(character).toBe(false)
    })

    test("Should return false for defense with negative value", () => {
        const character = validateCharacter({
            name: "Character",
            life: -1500,
            strength: 300,
            defense: 200,
        })
      
        expect(character).toBe(false)
    })

    test("Should return false for defense 0", () => {
        const character = validateCharacter({
            name: "Character",
            life: 1500,
            strength: 300,
            defense: 0,
        })
      
        expect(character).toBe(false)
    })

    test("Should return true for all the correct properties", () => {
        const character = validateCharacter({
            name: "Character",
            life: 1500,
            strength: 300,
            defense: 500,
        })
      
        expect(character).toBe(true)
    })
})