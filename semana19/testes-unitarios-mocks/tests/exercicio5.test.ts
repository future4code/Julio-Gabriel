import { Character } from '../src/exercicio1'
import { performAttackInversion } from '../src/exercicio3'

describe("Function test performAttackInversion", () => {
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Character 1",
            life: 1000,
            defense: 300,
            strength: 500,
        }
      
        const defender: Character = {
            name: "Character 2",
            life: 1000,
            defense: 300,
            strength: 800,
        }
      
        performAttackInversion(attacker, defender, validatorMock as any)
      
        expect(defender.life).toEqual(800)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should return invalid character error", () => {
        expect.assertions(4)
        
        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "Character 1",
            life: 1000,
            defense: 300,
            strength: 500,
        }
      
        const defender: Character = {
            name: "Character 2",
            life: 1000,
            defense: 300,
            strength: 800,
        }
        
        try {
            performAttackInversion(attacker, defender, validatorMock as any)
        } catch (error) {
            expect(error.message).toBe("Invalid character")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
        }
    })
})