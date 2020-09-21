import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { userRole } from "../services/Authenticator"

export class userBusiness {
    async createUser(user: any) {
        const idGenerator = new IdGenerator()
        const hashManager = new HashManager()
        const userDatabase = new UserDatabase()
        const authenticator = new Authenticator()

        try {
            if(!user.name || !user.email || !user.password || !user.role){
                throw new Error("Please fill all the fields")
            }

            if(user.email.indexOf("@") === -1){
                throw new Error("Invalid Email")
            }

            if(user.password.length < 6){
                throw new Error("Password must have at least 6 characters");
            }

            let userrole: userRole

            if (user.role !== userRole.ADMIN && userRole.NORMAL){
                 userrole = userRole.NORMAL
            } else {
                userrole = user.role
            }

            const id = idGenerator.generate()
            const hashPassword = await hashManager.hash(user.password)
            await userDatabase.createUser(id, user.email, user.name, hashPassword, userrole)
            const token = authenticator.generateToken({id, role: userrole})
            
            return token
        } catch(error) {
            throw new Error( error.message || "Error creating user. Please check your system administrator.")
        }
    }

    async getUserByEmail(user: any) {
        const userDatabase = new UserDatabase()
        const userInDB = await userDatabase.getUserByEmail(user.email)

        const hashManager = new HashManager()
        const hashCompare = await hashManager.compare(user.password, userInDB.password)

        const authenticator = new Authenticator()
        const accessToken = authenticator.generateToken({id: userInDB.id, role: userInDB.role})

        if (!hashCompare) {
            throw new Error("Invalid Password!")
        } else {
            return accessToken
        }
    }

    async get(token: string) {
        const userDatabase = new UserDatabase()
        const authenticator = new Authenticator()

        authenticator.getData(token)

        return await userDatabase.get()
    }

    async deleteUser(input: {id:string, token:string}) {
        const userDatabase = new UserDatabase()
        const authenticator = new Authenticator()

        const verifiedToken = authenticator.getData(input.token)

        if(verifiedToken.role !== "ADMIN") {
            throw new Error("Apenas administradores podem deletar usuários!")
        }

        return await userDatabase.deleteUser(input.id)
    }
}