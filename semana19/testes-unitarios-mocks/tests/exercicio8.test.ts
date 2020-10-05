import { Character } from '../src/exercicio1'
import { recoverCharacters, increaseChatacterAttack, decreaseCharacterDefense } from '../src/exercicio7'

describe("Function test recoverCharacters", () => {
    test("Must recover the characters lives", () => {
        const character1: Character = {
            name: "Character 1",
            life: 1000,
            defense: 300,
            strength: 500,
        }
      
        const character2: Character = {
            name: "Character 2",
            life: 1000,
            defense: 500,
            strength: 800,
        }

        const characters: Character[] = [character1, character2] 
      
        recoverCharacters(characters)
      
        expect(characters).toEqual(
            [
                {
                    name: "Character 1",
                    life: 1500,
                    defense: 300,
                    strength: 500
                }, 
                {
                    name: "Character 2",
                    life: 1500,
                    defense: 500,
                    strength: 800,
                }
            ]
        )
    })

    test("Must display the error: Works with at least two characters", () => {
        expect.assertions(1)

        try {
            const character1: Character = {
                name: "Character 1",
                life: 1000,
                defense: 300,
                strength: 500,
            }
    
            const characters: Character[] = [character1] 
          
            recoverCharacters(characters)
        } catch (error) {
            expect(error.message).toEqual("Works with at least two characters")
        }
    })

    test("Only recover characters with health below 1500", () => {
        const character1: Character = {
            name: "Character 1",
            life: 1000,
            defense: 300,
            strength: 500,
        }
      
        const character2: Character = {
            name: "Character 2",
            life: 1800,
            defense: 500,
            strength: 800,
        }

        const characters: Character[] = [character1, character2] 
      
        recoverCharacters(characters)
      
        expect(characters).toEqual(
            [
                {
                    name: "Character 1",
                    life: 1500,
                    defense: 300,
                    strength: 500
                }, 
                {
                    name: "Character 2",
                    life: 1500,
                    defense: 500,
                    strength: 800,
                }
            ]
        )
    })

    test("Only recover characters with health below 1500", () => {
        const character1: Character = {
            name: "Character 1",
            life: 1500,
            defense: 300,
            strength: 500,
        }
      
        const character2: Character = {
            name: "Character 2",
            life: 1500,
            defense: 500,
            strength: 800,
        }

        const characters: Character[] = [character1, character2] 
      
        recoverCharacters(characters)
      
        expect(characters).toEqual(
            [
                {
                    name: "Character 1",
                    life: 1500,
                    defense: 300,
                    strength: 500
                }, 
                {
                    name: "Character 2",
                    life: 1500,
                    defense: 500,
                    strength: 800,
                }
            ]
        )
    })
})

describe("Function test increaseChatacterAttack", () => {
    test("Should increase the power of atack", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const character1: Character = {
            name: "Character 1",
            life: 1000,
            defense: 300,
            strength: 500,
        }
      
        increaseChatacterAttack(character1, 600, validatorMock as any)
      
        expect(character1).toEqual(
            {
                name: "Character 1",
                life: 1000,
                defense: 300,
                strength: 600,
            }    
        )
    })

    test("Should display the error: The new attack must be greater than the current strength", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        expect.assertions(1)

        try {
            const character1: Character = {
                name: "Character 1",
                life: 1000,
                defense: 300,
                strength: 500,
            }
          
            increaseChatacterAttack(character1, 400, validatorMock as any)
        } catch (error) {
            expect(error.message).toEqual("The new attack must be greater than the current strength")
        }
    })

    test("Should display the error: The new attack must be greater than the current strength", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        expect.assertions(1)

        try {
            const character1: Character = {
                name: "Character 1",
                life: 1000,
                defense: 300,
                strength: 500,
            }
          
            increaseChatacterAttack(character1, 500, validatorMock as any)
        } catch (error) {
            expect(error.message).toEqual("The new attack must be greater than the current strength")
        }
    })

    test("Should display the error: Invalid character", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
        
        expect.assertions(1)

        try {
            const character1: Character = {
                name: "Character 1",
                life: undefined,
                defense: 300,
                strength: 500,
            }
          
            increaseChatacterAttack(character1, 500, validatorMock as any)
        } catch (error) {
            expect(error.message).toEqual("Invalid character")
        }
    })
})

describe("Function test decreaseCharacterDefense", () => {
    test("Should decrease the power of defense", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const character1: Character = {
            name: "Character 1",
            life: 1000,
            defense: 300,
            strength: 500,
        }
      
        decreaseCharacterDefense(character1, 200, validatorMock as any)
      
        expect(character1).toEqual(
            {
                name: "Character 1",
                life: 1000,
                defense: 200,
                strength: 500,
            }    
        )
    })

    test("Should display the error: The new defense must be less than the current defense", () => {
        expect.assertions(1)

        const validatorMock = jest.fn(() => {
            return true
        })

        try {
            const character1: Character = {
                name: "Character 1",
                life: 1000,
                defense: 300,
                strength: 500,
            }
          
            decreaseCharacterDefense(character1, 400, validatorMock as any)
        } catch (error) {
            expect(error.message).toEqual("The new defense must be less than the current defense")
        }
    })

    test("Should display the error: The new defense must be less than the current defense", () => {
        expect.assertions(1)

        const validatorMock = jest.fn(() => {
            return true
        })

        try {
            const character1: Character = {
                name: "Character 1",
                life: 1000,
                defense: 300,
                strength: 500,
            }
          
            decreaseCharacterDefense(character1, 300, validatorMock as any)
        } catch (error) {
            expect(error.message).toEqual("The new defense must be less than the current defense")
        }
    })

    test("Should display the error: Invalid character", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
        
        expect.assertions(1)

        try {
            const character1: Character = {
                name: "Character 1",
                life: undefined,
                defense: 300,
                strength: 500,
            }
          
            decreaseCharacterDefense(character1, 200, validatorMock as any)
        } catch (error) {
            expect(error.message).toEqual("Invalid character")
        }
    })
})