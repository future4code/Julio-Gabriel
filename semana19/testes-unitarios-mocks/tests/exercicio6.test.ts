import { Character } from '../src/exercicio1'
import { performAttackInversion } from '../src/exercicio3'

describe("Function test performAttackInversion", () => {
    test("Must perform defense and not lose life when the attack power is equal to the defense power.", () => {
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
            defense: 500,
            strength: 800,
        }
      
        performAttackInversion(attacker, defender, validatorMock as any)
      
        expect(defender.life).toEqual(1000)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Must defend and not lose life when the attack power is less than the defense power.", () => {
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
            defense: 600,
            strength: 800,
        }
      
        performAttackInversion(attacker, defender, validatorMock as any)
      
        expect(defender.life).toEqual(1000)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should perform attack and the opponent's life must go to 0.", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Character 1",
            life: 1000,
            defense: 300,
            strength: 1500,
        }
      
        const defender: Character = {
            name: "Character 2",
            life: 1000,
            defense: 500,
            strength: 800,
        }
      
        performAttackInversion(attacker, defender, validatorMock as any)
      
        expect(defender.life).toEqual(0)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should perform attack and the opponent's life must go to -200.", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Character 1",
            life: 1000,
            defense: 300,
            strength: 1700,
        }
      
        const defender: Character = {
            name: "Character 2",
            life: 1000,
            defense: 500,
            strength: 800,
        }
      
        performAttackInversion(attacker, defender, validatorMock as any)
      
        expect(defender.life).toEqual(-200)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })
})