import { LOCATION, NACIONALITY, User, Casino, verifyAge } from '../src/exercicio3'

describe("Create post and get post by id", () => {
    const CasinoBRASIL: Casino = {
        name: "Brasil",
        location: LOCATION.BRAZIL
    }
    
    const joao: User = {
        name: "João",
        age: 21,
        nacionality: NACIONALITY.BRAZILIAN
    }

    const johnTourist: User = {
        name: "John Tourist",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }

    const usersBrasilExercicio5a: User[] = [joao]
    const usersBrasilExercicio5b: User[] = [johnTourist]
    
    const CasinoEua: Casino = {
        name: "EUA",
        location: LOCATION.EUA
    }

    const joaoTurista: User = {
        name: "João Turista",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    
    const mariaTurista: User = {
        name: "Maria Turista",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }

    const john: User = {
        name: "John",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }
    
    const marie: User = {
        name: "Marie",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }

    const usersBrasilExercicio5c: User[] = [joaoTurista, mariaTurista, john, marie]

    const johnTwo: User = {
        name: "John Two",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    
    const marieTwo: User = {
        name: "Marie Two",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }

    const usersBrasilExercicio5d: User[] = [joaoTurista, mariaTurista, johnTwo, marieTwo]

    test("1 brazilian allowed", () => {
        const result = verifyAge(CasinoBRASIL, usersBrasilExercicio5a)

        expect(result.brazilians.allowed.length).toBeLessThan(2)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    })

    test("Zero americans unallowed", () => {
        const result = verifyAge(CasinoBRASIL, usersBrasilExercicio5b)

        expect(result.americans.unallowed.length).toEqual(0)
    })

    test("No one allowed", () => {
        const result = verifyAge(CasinoEua, usersBrasilExercicio5c)

        expect(result.americans.unallowed).toContain("John")
        expect(result.brazilians.unallowed).toContain("João Turista")
    })

    test("2 american allowed and 2 brazilians unallowed", () => {
        const result = verifyAge(CasinoEua, usersBrasilExercicio5d)

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toEqual(2)
    })
})