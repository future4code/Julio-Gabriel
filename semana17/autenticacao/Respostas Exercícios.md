### Exercicio 1

a) Sim, pois usando apenas números, conforme a aplicação vai aumentando o número de usuários, com mais caracteres vai ficando o id, já com string, os números de combinações fica muito maior com um número igual de caracteres do que se fosse apenas números.

b)

~~~TypeScript
import { v4 } from 'uuid'

export class IdGenerator {
    public generate() : string {
        return v4()
    }
}
~~~

### Exercício 2 

a) Primeiramente o código atribui a uma váriavel o nome da tabela que estamos trabalhando que neste caso é User, depois ele define a conexão com a banco de dados, informando o client, e acessando os valores do arquivo .env para atribuir a host, user, password e database pois estes dados não podem ser públicos, por isso, está no arquivo .env, e depois ele cria uma arrow function assíncrona que recebe um id, email e password e que será responsável por criar um usuário no banco de dados.

b) 

~~~SQL 
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
~~~

c)

~~~TypeScript
import Knex from "knex";
import knex from "knex";
import dotenv from 'dotenv'

dotenv.config()

export abstract class BaseDatabase {
  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if(BaseDatabase.connection === null) {
      BaseDatabase.connection = knex({
        client: "mysql",
        connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
        } 
      })
    }
    return BaseDatabase.connection;
  }
}
~~~

~~~TypeScript
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME: string = 'User'

  public async createUser(id: string, email: string, password: string): Promise<void> {
        await this.getConnection()
        .insert({
        id, 
        email,
        password
        })
        .into(UserDatabase.TABLE_NAME)
  }
}
~~~

d)

~~~TypeScript
const idgenerator: IdGenerator = new IdGenerator()
const id: string = idgenerator.generate()

const userdatabase: UserDatabase = new UserDatabase()
userdatabase.createUser(id, "teste2@teste.com", "123456")
~~~

### Exercício 3

a) A linha process.env.JWT_KEY as string pega do arquivo.env o JWT_KEY e converte para uma string, ou seja, sempre garante que o que retorna do JWT_KEY será um string.

b)

~~~TypeScript
import jwt from 'jsonwebtoken'

export class Authenticator {
  public generateToken(data: AuthenticationData): string {
    return jwt.sign(
      data,
      process.env.JWT_KEY as string,
      {expiresIn: process.env.EXPIRES_IN as string}
    )
  }
}

export interface AuthenticationData {
  id: string
}
~~~

### Exercício 4

~~~TypeScript
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
~~~

### Exercício 5

~~~TypeScript
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME: string = 'User'

  public async createUser(id: string, email: string, password: string): Promise<void> {
        await this.getConnection()
        .insert({
        id, 
        email,
        password
        })
        .into(UserDatabase.TABLE_NAME)
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select('*')
      .from(UserDatabase.TABLE_NAME)
      .where({email})
      return result[0]
  }
}
~~~

### Exercício 6

~~~TypeScript
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
~~~

### Exercício 7

a) o as any converte o resultado da função para any pois pode retornar qualquer coisa do banco de dados.
b)

~~~TypeScript
import jwt from 'jsonwebtoken'

export class Authenticator {
  public generateToken(data: AuthenticationData): string {
    return jwt.sign(
      data,
      process.env.JWT_KEY as string,
      {expiresIn: process.env.EXPIRES_IN as string}
    )
  }

  public getData(token: string): AuthenticationData {
   const data = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as any
    return {
      id: data.id
    }
  }
}

export interface AuthenticationData {
  id: string
}
~~~

### Exercício 8

a) 

~~~TypeScript
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME: string = 'User'

  public async createUser(id: string, email: string, password: string): Promise<void> {
        await this.getConnection()
        .insert({
        id, 
        email,
        password
        })
        .into(UserDatabase.TABLE_NAME)
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select('*')
      .from(UserDatabase.TABLE_NAME)
      .where({email})
      return result[0]
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select('*')
      .from(UserDatabase.TABLE_NAME)
      .where({id})
      return result[0]
  }
}
~~~

b)

~~~TypeScript
import {Request, Response} from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { Authenticator } from '../services/Authenticator'

export const getUserProfile = async (req: Request, res: Response ) => {
    try {
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(authenticationData.id)

        if(!user) {
            throw new Error('Usuário não encontrado')
        }

        res.status(200).send({id: user.id, email: user.email})
    } catch(error) {
        res.status(400).send({message: error.message})
    }
}
~~~