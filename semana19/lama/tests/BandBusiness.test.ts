import { BandBusiness } from "../src/business/BandBusiness"
import { Band, BandInputDTO } from "../src/model/Band";
import { UserRole } from "../src/model/User";
import { AuthenticationData } from "../src/services/Authenticator"

const bandDatabase = {
    registerBand: jest.fn(
        async (id: string, name: string, music_genre: string, responsible: string) => {}
    ),
    getBandById: jest.fn(
        (id: string) => undefined
    ),
    getBandByName: jest.fn(
        (id: string) => undefined
    ),
} as any

const idGenerator = {
    generate: jest.fn(() => "id mock")
} as any

const authenticator = {
    generateToken: jest.fn(
        (payload: { id: string, role: UserRole }) => "token de mentirinha"
    ),
    getData: jest.fn((token: string) => data)
} as any

const data: AuthenticationData = {
    id: "idvalido",
    role: UserRole.ADMIN
} as any

const bandBusiness: BandBusiness = new BandBusiness(
   bandDatabase,
   idGenerator,
   authenticator
)

describe("Testa o método de cadastro de bandas", () => {
    test("Deve retornar erro quando o gênero da banda não for passado", async () => {
        expect.assertions(2)

        try {
            const band: BandInputDTO = {
                name: "Band 1",
                music_genre: "",
                responsible: "Responsible 1",
            }

            const token: string = "tokenvalido"
            await bandBusiness.registerBand(band, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
   })

    test("Deve retornar erro quando o nome da banda não for passado", async () => {
        expect.assertions(2)

        try {
            const band: BandInputDTO = {
                name: "",
                music_genre: "Genre 1",
                responsible: "Responsible 1",
            }

            const token: string = "tokenvalido"
            await bandBusiness.registerBand(band, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o nome do responsável da banda não for passado", async () => {
        expect.assertions(2)

        try {
            const band: BandInputDTO = {
                name: "Band 1",
                music_genre: "Genre 1",
                responsible: "",
            }

            const token: string = "tokenvalido"
            await bandBusiness.registerBand(band, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o token não for passado", async () => {
        expect.assertions(2)

        try {
            const band: BandInputDTO = {
                name: "Band 1",
                music_genre: "Genre 1",
                responsible: "",
            }

            const token: string = ""
            await bandBusiness.registerBand(band, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o usuário não for administrador e tentar cadastrar uma banda", async () => {
        expect.assertions(2)

        try {
            const band: BandInputDTO = {
                name: "Band 1",
                music_genre: "Genre 1",
                responsible: "Responsible 1",
            }

            const data: AuthenticationData = {
                id: "idvalido",
                role: UserRole.NORMAL
            }

            authenticator.getData = jest.fn((token: string) => data)

            const token: string = "tokenvalido"
            await bandBusiness.registerBand(band, token)
        } catch (error) {
            expect(error.message).toBe("You must be an admin to access this endpoint")
            expect(error.code).toBe(401)
        }
    })

    test("Deve registrar uma banda com sucesso", async () => {
        const band: BandInputDTO = {
            name: "Band 1",
            music_genre: "Genre 1",
            responsible: "Responsible 1",
        }

        const data: AuthenticationData = {
            id: "idvalido",
            role: UserRole.ADMIN
        }

        authenticator.getData = jest.fn((token: string) => data)

        const token: string = "tokenvalido"
        await bandBusiness.registerBand(band, token)
    })
})

describe("Testa o método de pegar as bandas pelo nome ou pelo ID", () => {
    test("Deve retornar erro quando o dia da semana e o ID não for passado", async () => {
        expect.assertions(2)

        try {
            const id: string = ""
            const name: string = ""
            const token: string = "tokenvalido"

            await bandBusiness.getBandByIdOrName(id, name, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o token não for passado", async () => {
        expect.assertions(2)

        try {
            const id: string = "idvalido"
            const name: string = ""
            const token: string = ""

            await bandBusiness.getBandByIdOrName(id, name, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o Id e no nome da banda foi passado", async () => {
        expect.assertions(2)

        try {
            const id: string = "idvalido"
            const name: string = "Band 1"
            const token: string = "tokenvalido"

            await bandBusiness.getBandByIdOrName(id, name, token)
        } catch (error) {
            expect(error.message).toBe("You can only search for a band by id or name and not two at the same time.")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o Id de uma banda for passado mas esse id não existe no banco de dados", async () => {
        expect.assertions(2)

        try {
            const id: string = "idvalido"
            const name: string = ""
            const token: string = "tokenvalido"

            await bandBusiness.getBandByIdOrName(id, name, token)
        } catch (error) {
            expect(error.message).toBe("Band not found")
            expect(error.code).toBe(404)
        }
    })

    test("Deve retornar erro quando o nome de uma banda for passado mas esse nome não existe no banco de dados", async () => {
        expect.assertions(2)

        try {
            const id: string = ""
            const name: string = "Band 1"
            const token: string = "tokenvalido"

            await bandBusiness.getBandByIdOrName(id, name, token)
        } catch (error) {
            expect(error.message).toBe("Band not found")
            expect(error.code).toBe(404)
        }
    })

    test("Deve encontrar uma banda pelo id", async () => {
        const id: string = "idvalido"
        const name: string = ""
        const token: string = "tokenvalido"

        const band = {
            id: "idvalido",
            name: "Band 1",
            music_genre: "Genre 1",
            responsible: "Responsible 1",
        }

        bandDatabase.getBandById = jest.fn(
            (id: string) => band
        )

        const result = await bandBusiness.getBandByIdOrName(id, name, token)
        expect(result).toEqual({
            id: "idvalido",
            name: "Band 1",
            music_genre: "Genre 1",
            responsible: "Responsible 1"
        })
    })

    test("Deve encontrar uma banda pelo nome", async () => {
        const id: string = ""
        const name: string = "Band 1"
        const token: string = "tokenvalido"

        const band = {
            id: "idvalido",
            name: "Band 1",
            music_genre: "Genre 1",
            responsible: "Responsible 1",
        }

        bandDatabase.getBandByName = jest.fn(
            (name: string) => band
        )

        const result = await bandBusiness.getBandByIdOrName(id, name, token)
        expect(result).toEqual({
            id: "idvalido",
            name: "Band 1",
            music_genre: "Genre 1",
            responsible: "Responsible 1"
        })
    })
})