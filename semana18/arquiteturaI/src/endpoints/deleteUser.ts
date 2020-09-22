import { Request, Response} from 'express'
import { userBusiness } from "../Business/userBusiness"
import { BaseDatabase } from "../data/BaseDatabase"

export const deleteUser = async (req: Request, res: Response) => {
    const userbusiness = new userBusiness()
    
    try {
        const input = {
            id: req.params.id,
            token: req.headers.authorization as string
        }

       await userbusiness.deleteUser(input)

        res.status(200).send({ message: "Usuário apagado com sucesso" })
    } catch (error) {
        res.status(400).send({ error: error.message })
    } finally {
        await BaseDatabase.destroyConnection()
    }
}