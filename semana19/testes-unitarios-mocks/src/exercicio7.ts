import { Character } from './exercicio1'

export const recoverCharacters = (characters: Character[]) : void => {
    if (characters.length < 2) {
        throw new Error("Works with at least two characters")
    } else {
        const recoveredCharacters: Character[] = characters.map((character: Character) => {
            if(character.life < 1500 || character.life > 1500) {
                character.life = 1500
                return character
            } else {
                return character
            }
        })

        characters = recoveredCharacters
    }
}

export const increaseChatacterAttack = (character: Character, newAttack: number, validator: (input: Character) => boolean): void => {
    if (!validator(character)) {
        throw new Error("Invalid character")
    }

    if (character.strength >= newAttack) {
        throw new Error("The new attack must be greater than the current strength")
    } else {
        character.strength = newAttack
    }
}

export const decreaseCharacterDefense = (character: Character, newDefense: number, validator: (input: Character) => boolean): void => {
    if (!validator(character)) {
        throw new Error("Invalid character")
    }
    
    if (character.defense <= newDefense) {
        throw new Error("The new defense must be less than the current defense")
    } else {
        character.defense = newDefense
    }
}