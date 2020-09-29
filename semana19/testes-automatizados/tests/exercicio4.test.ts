import { LOCATION, NACIONALITY, User, Casino, verifyAge } from '../src/exercicio3'

describe("Testing Exercicio 3", () => {
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

    const usersBrasilExercicio4a: User[] = [joao]
    const usersBrasilExercicio4b: User[] = [johnTourist]
    
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

    const usersBrasilExercicio4c: User[] = [joaoTurista, mariaTurista, john, marie]

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

    const usersBrasilExercicio4d: User[] = [joaoTurista, mariaTurista, johnTwo, marieTwo]

    test("1 brazilian allowed", () => {
        const result = verifyAge(CasinoBRASIL, usersBrasilExercicio4a)

        expect(result.brazilians.allowed).toEqual(["João"])
    })

    test("1 american allowed", () => {
        const result = verifyAge(CasinoBRASIL, usersBrasilExercicio4b)

        expect(result.americans.allowed).toEqual(["John Tourist"])
    })

    test("No one allowed", () => {
        const result = verifyAge(CasinoEua, usersBrasilExercicio4c)

        expect(result.brazilians.allowed.length).toEqual(0)
        expect(result.brazilians.unallowed.length).toEqual(2)
        expect(result.americans.allowed.length).toEqual(0)
        expect(result.americans.unallowed.length).toEqual(2)
    })

    test("2 american allowed and 2 brazilians unallowed", () => {
        const result = verifyAge(CasinoEua, usersBrasilExercicio4d)

        expect(result.brazilians.allowed.length).toEqual(0)
        expect(result.brazilians.unallowed.length).toEqual(2)
        expect(result.americans.allowed.length).toEqual(2)
        expect(result.americans.unallowed.length).toEqual(0)
    })
})