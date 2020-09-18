import { Request, Response} from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'

export const signup = async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email as string,
      password: req.body.password as string
    }

    if(!userData.password || !userData.email) {
      throw new Error('Insira todos os campos para cadastrar')
    }

    if(userData.email.indexOf('@') === -1) {
      throw new Error('Email inválido')
    }

    if(userData.password.length < 6) {
        throw new Error('Senha inválida, aceitamos senhas apenas com 6 caracteres ou mais')
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const userDatabase = new UserDatabase()
    await userDatabase.createUser(
      id,
      userData.email,
      userData.password
    )

    const authenticatior = new Authenticator();
    const token = authenticatior.generateToken({id});

    res.status(200).send({message: 'Usuário criado com sucesso', token})

  } catch(error) {
    res.status(400).send({message: error.message})
  }
}