import { UserBusiness } from "../src/business/UserBusiness"
import { UserInputDTO, User, UserRole, LoginInputDTO } from "../src/model/User";

const userDatabase = {
   createUser: jest.fn(
      async (user: User) => { }
   ),
   getUserByEmail: jest.fn(
      (email: string) => undefined
   )
} as any

const idGenerator = {
   generate: jest.fn(() => "id mock")
} as any

const hashManager = {
   hash: jest.fn((password: string) => "cypher password"),
   compare: jest.fn(
      async (s: string, hash: string) => false
   )
} as any

const authenticator = {
   generateToken: jest.fn(
      (payload: { id: string, role: UserRole }) => "token de mentirinha"
   )
} as any

const userBusiness: UserBusiness = new UserBusiness(
   userDatabase,
   idGenerator,
   hashManager,
   authenticator
)

describe("Testa o método de cadastro", () => {

    test("Deve retornar erro quando um nome não for passado", async () => {
      expect.assertions(2)

      try {
        const user: UserInputDTO = {
                email: "user1@email.com",
                password: "password",
                name: "",
                role: "ADMIN"
        }
        await userBusiness.createUser(user)
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.code).toBe(422)
      }
   })

   test("Deve retornar erro quando um email não for passado", async () => {
      expect.assertions(2)

      try {
        const user: UserInputDTO = {
            email: "",
            password: "password",
            name: "User 1",
            role: "ADMIN"
        }
        await userBusiness.createUser(user)
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.code).toBe(422)
      }
   })

   test("Deve retornar erro quando uma senha não for passada", async () => {
      expect.assertions(2)

      try {
        const user: UserInputDTO = {
            email: "user1@email.com",
            password: "",
            name: "User 1",
            role: "ADMIN"
        }
        await userBusiness.createUser(user)
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.code).toBe(422)
      }
   })

   test("Deve retornar erro quando um role não for passado", async () => {
      expect.assertions(2)

      try {
        const user: UserInputDTO = {
            email: "user1@email.com",
            password: "password",
            name: "User 1",
            role: ""
        }
        await userBusiness.createUser(user)
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.code).toBe(422)
      }
   })

   test("Deve retornar erro quando o email for inválido", async () => {
      expect.assertions(2)

      try {
        const user: UserInputDTO = {
            email: "user1email.com",
            password: "password",
            name: "User 1",
            role: "ADMIN"
        }
        await userBusiness.createUser(user)
      } catch (error) {
         expect(error.message).toBe("Invalid email")
         expect(error.code).toBe(422)
      }
   })

   test("Deve retornar erro quando a senha for inválida", async () => {
      expect.assertions(2)

      try {
        const user: UserInputDTO = {
            email: "user1@user.com",
            password: "pass",
            name: "User 1",
            role: "ADMIN"
        }
        await userBusiness.createUser(user)
      } catch (error) {
         expect(error.message).toBe("Invalid password")
         expect(error.code).toBe(422)
      }
   })

   test("Deve retornar erro quando o role for inválido", async () => {
        expect.assertions(2)

        try {
            const user: UserInputDTO = {
                email: "user1@email.com",
                password: "password",
                name: "User 1",
                role: "BBB"
            }
            await userBusiness.createUser(user)
        } catch (error) {
            expect(error.message).toBe("Invalid role")
            expect(error.code).toBe(422)
        }
   })

   test("Deve retornar um token de acesso", async () => {
        const user: UserInputDTO = {
            email: "user1@email.com",
            password: "password",
            name: "User 1",
            role: "ADMIN"
        }
        
        const result = await userBusiness.createUser(user)

        expect(result).toBe("token de mentirinha")
   })
})

describe("Testa o método de login", () => {
    test("Deve retornar erro quando um email não for passado", async () => {
        expect.assertions(2)

        try {
            const user: LoginInputDTO = {
                email: "",
                password: "password",
            }
            await userBusiness.getUserByEmail(user)
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.code).toBe(422)
        }
    })

   test("Deve retornar erro quando uma senha não for passada", async () => {
      expect.assertions(2)

      try {
        const user: LoginInputDTO = {
            email: "user1@teste.com",
            password: "",
        }
        await userBusiness.getUserByEmail(user)
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.code).toBe(422)
      }
   })

    test("Deve retornar erro quando o usuário não for encontrado", async () => {
        expect.assertions(2)

        try {
            const user: LoginInputDTO = {
                email: "user1@teste.com",
                password: "paswword",
            }
            await userBusiness.getUserByEmail(user)
        } catch (error) {
            expect(error.message).toBe("User not found")
            expect(error.code).toBe(404)
        }
    })

   test("Deve retornar erro quando a senha estiver incorreta", async () => {
      expect.assertions(2)

      userDatabase.getUserByEmail = (email: string) => {
         return new User(
            "id",
            "Astrodev",
            "astrodev@labenu.com.br",
            "bananinha",
            UserRole.ADMIN
         )
      }

      try {
        const user: LoginInputDTO = {
            email: "user1@teste.com",
            password: "paswword",
        }
        await userBusiness.getUserByEmail(user)
      } catch (error) {
         expect(error.message).toBe("Invalid Password!")
         expect(error.code).toBe(422)
      }
   })

   test("Deve retornar um token de acesso", async () => {
        hashManager.compare = jest.fn(
            async (s: string, hash: string) => true
        )

        const user: LoginInputDTO = {
            email: "user1@teste.com",
            password: "paswword",
        }

        const result = await userBusiness.getUserByEmail(user)

        expect(result).toBe("token de mentirinha")
   })
})