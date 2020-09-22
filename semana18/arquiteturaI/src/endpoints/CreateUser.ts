import { Request, Response} from 'express'
import { userBusiness } from "../Business/userBusiness"
import { BaseDatabase } from "../data/BaseDatabase"

export const signup = async (req: Request, res: Response) => {
    const userbusiness = new userBusiness()
        
    try {
        const input = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        }

        const token = await userbusiness.createUser(input)

        res.status(200).send({ token })
    } catch (error) {
        res.status(400).send({ error: error.message })
    } finally {
        await BaseDatabase.destroyConnection()
    }
}