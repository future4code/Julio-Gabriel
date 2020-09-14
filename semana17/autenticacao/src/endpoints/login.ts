import { Request, Response} from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'

export const login = async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email as string,
      password: req.body.password as string
    }

    if(!userData.password || !userData.email) {
      throw new Error('Insira o email e a senha.')
    }

    if(userData.email.indexOf('@') === -1) {
      throw new Error('Email inválido')
    }

    if(userData.password.length < 6) {
        throw new Error('Senha inválida')
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserByEmail(userData.email)

    if(userData.password !== user.password) {
      throw new Error('Usuário ou senha inválidos')
    }

    const authenticatior = new Authenticator()
    const token = authenticatior.generateToken({id: user.id})

    res.status(200).send({message: 'Usuário logado com sucesso', token})

  } catch(error) {
    res.status(400).send({message: error.message})
  }
}