import { Request, Response} from 'express'
import { userBusiness } from "../Business/userBusiness"
import { BaseDatabase } from "../data/BaseDatabase"

export const login = async (req: Request, res: Response) => {
    try {
        const loginData = {
            email: req.body.email,
            password: req.body.password
        }

        const userbusiness = new userBusiness()
        const token = await userbusiness.getUserByEmail(loginData)

        res.status(200).send({ token })
    } catch (error) {
        res.status(400).send({ error: error.message })
    } finally {
        await BaseDatabase.destroyConnection()
    }
}