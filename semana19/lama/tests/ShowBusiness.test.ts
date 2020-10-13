import { ShowBusiness } from "../src/business/ShowBusiness"
import { ShowInputDTO, Show, ShowOutputDTO } from "../src/model/Show";
import { UserRole } from "../src/model/User";
import { AuthenticationData } from "../src/services/Authenticator"

const showDatabase = {
   registerShow: jest.fn(
      async (show: ShowInputDTO, token: string) => { }
   ),
   getShowByWeekDay: jest.fn(
      (week_day: string, token: string) => undefined
   ),
   getShowByWeekDayAndStartTime: jest.fn( 
       async (week_day: string, start_time: string) => shows
    )
} as any

const show: Show = new Show(
    "idvalido",
    "SEXTA",
    8,
    9,
    "idbvalido"
)

const shows: Show[] = [show]

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

const showBusiness: ShowBusiness = new ShowBusiness(
   showDatabase,
   idGenerator,
   authenticator
)

describe("Testa o método de cadastro de show", () => {
    test("Deve retornar erro quando o dia da semana não for passado", async () => {
      expect.assertions(2)

      try {
        const show: ShowInputDTO = {
            week_day: "",
            start_time: 8,
            end_time: 9,
            band_id: "idvalido"
        }

        const token: string = "tokenvalido"
        await showBusiness.registerShow(show, token)
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.code).toBe(422)
      }
   })

    test("Deve retornar erro quando a hora de íncio não for passada", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 0,
                end_time: 9,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando a hora de encerramento não for passada", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 8,
                end_time: 0,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o id da banda não for passado", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 8,
                end_time: 9,
                band_id: ""
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando a hora de ínicio for inferior a 8h", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 7,
                end_time: 9,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("Invalid start hours")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando a hora de ínicio for superior as 22h", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 23,
                end_time: 9,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("Invalid start hours")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando a hora de ínicio for maior que a hora de encerramento", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 10,
                end_time: 9,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("The beginning of time should be less than the closing time")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando a hora de ínicio for igual que a hora de encerramento", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 10,
                end_time: 10,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("The beginning of time should be less than the closing time")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando a hora de encerramento for menor que 9h.", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 8,
                end_time: 8.8,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("Invalid end hours")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando a hora de encerramento for maior que 23h.", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 8,
                end_time: 23.1,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("Invalid end hours")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o dia do show não for SEXTA, SÁBADO ou DOMINGO", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "QUINTA",
                start_time: 8,
                end_time: 9,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("Invalid week day")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o horário de ínicio não for número inteiro", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 8.1,
                end_time: 9,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("The shows can only begin and end in whole hours")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o horário de encerramento não for número inteiro", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 8,
                end_time: 9.1,
                band_id: "idvalido"
            }

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("The shows can only begin and end in whole hours")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o usuário não for administrador e tentar registrar um show", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 8,
                end_time: 9,
                band_id: "idvalido"
            }

            const data: AuthenticationData = {
                id: "idvalido",
                role: UserRole.NORMAL
            }

            authenticator.getData = jest.fn((token: string) => data)

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("You must be an admin to access this endpoint")
            expect(error.code).toBe(401)
        }
    })

    test("Deve retornar erro quando já existir um show no mesmo dia e horário", async () => {
        expect.assertions(2)

        try {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 8,
                end_time: 9,
                band_id: "idvalido"
            }

            const data: AuthenticationData = {
                id: "idvalido",
                role: UserRole.ADMIN
            }

            authenticator.getData = jest.fn((token: string) => data)

            const token: string = "tokenvalido"
            await showBusiness.registerShow(show, token)
        } catch (error) {
            expect(error.message).toBe("There is already a show scheduled for this day at this time")
            expect(error.code).toBe(422)
        }
    })

    test("Deve criar um show com sucesso", async () => {
            const show: ShowInputDTO = {
                week_day: "SEXTA",
                start_time: 9,
                end_time: 10,
                band_id: "idvalido"
            }

            const data: AuthenticationData = {
                id: "idvalido",
                role: UserRole.ADMIN
            }

            const showFromDb = undefined

            showDatabase.getShowByWeekDayAndStartTime = jest.fn( 
                async (week_day: string, start_time: string) => showFromDb
            )

            authenticator.getData = jest.fn((token: string) => data)

            const token: string = "tokenvalido"
            const result = await showBusiness.registerShow(show, token)

            expect(result).toBe(undefined)
    })
})

describe("Testa o método de pegar os shows pelo dia da semana", () => {
    test("Deve retornar erro quando o dia da semana não for passado", async () => {
        expect.assertions(2)

        try {
            const week_day: string = ""
            const token: string = "tokenvalido"

            await showBusiness.getShowByWeekDay(week_day, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o token não for passado", async () => {
        expect.assertions(2)

        try {
            const week_day: string = "SEXTA"
            const token: string = ""

            await showBusiness.getShowByWeekDay(week_day, token)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando o dia da semana for diferent de SEXTA, SÁBADO ou DOMINGO", async () => {
        expect.assertions(2)

        try {
            const week_day: string = "QUINTA"
            const token: string = "tokenvalido"

            await showBusiness.getShowByWeekDay(week_day, token)
        } catch (error) {
            expect(error.message).toBe("Invalid week day")
            expect(error.code).toBe(422)
        }
    })

    test("Deve retornar erro quando não encontrar nenhum show no dia", async () => {
        expect.assertions(2)

        try {
            const week_day: string = "SEXTA"
            const token: string = "tokenvalido"

            await showBusiness.getShowByWeekDay(week_day, token)
        } catch (error) {
            expect(error.message).toBe("Show(s) not found")
            expect(error.code).toBe(404)
        }
    })

    test("Deve encontrar dois shows", async () => {
        const week_day: string = "SEXTA"
        const token: string = "tokenvalido"

        const show1: ShowOutputDTO = {
            name: "Band 1",
            music_genre: "Genre 1"
        }

        const show2: ShowOutputDTO = {
            name: "Band 2",
            music_genre: "Genre 2"
        }

        const shows: ShowOutputDTO[] = [show1, show2]

        showDatabase.getShowByWeekDay = jest.fn(
            (week_day: string, token: string) => shows
        )

        const result = await showBusiness.getShowByWeekDay(week_day, token)
        expect(result).toEqual([
            {
                name: "Band 1",
                music_genre: "Genre 1"
            },
            {
                name: "Band 2",
                music_genre: "Genre 2"
            }
        ])
    })
})