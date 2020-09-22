import { Request, Response} from 'express'
import { userBusiness } from "../Business/userBusiness"
import { BaseDatabase } from "../data/BaseDatabase"

export const getAllUsers = async (req: Request, res: Response) => {
    const userbusiness = new userBusiness()
    try {
        const token = req.headers.authorization as string
        const users = await userbusiness.get(token)

        res.send(users).status(200)
    } catch (error) {
        res.send({ message: error.message }).status(error.status)
    } finally {
        await BaseDatabase.destroyConnection()
    }
}