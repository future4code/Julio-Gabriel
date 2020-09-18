import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { AddressInfo } from "net"
import { IdGenerator } from "./services/IdGenerator"
import { UserDatabase } from "./data/UserDatabase"
import { Authenticator } from "./services/Authenticator"
import { HashManager } from "./services/HashManager"
import { BaseDatabase } from "./data/BaseDatabase"

dotenv.config()

const app = express()

app.use(express.json())

app.post("/signup", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const hashManager: HashManager = new HashManager()
    const cypherPassword: string = await hashManager.hash(userData.password)

    const userDb = new UserDatabase()
    await userDb.createUser(id, userData.email, cypherPassword, userData.role)

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
      role: userData.role,
    })

    res.status(200).send({token,})
  } catch (err) {
    res.status(400).send({message: err.message,})
  }

  await BaseDatabase.destroyConnection()
})

app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email")
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserByEmail(userData.email)

    const passwordIsCorrect: boolean = await new HashManager().compare(userData.password, user.password)

    if (!passwordIsCorrect) {
      throw new Error('Usuário ou senha inválidos')
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role,
    })

    res.status(200).send({token,})
  } catch (err) {
    res.status(400).send({message: err.message,})
  }

  await BaseDatabase.destroyConnection()
})

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string

    const authenticator = new Authenticator()
    const authenticationData = authenticator.getData(token)

    if (authenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality")
    }

    const userDb = new UserDatabase()
    const user = await userDb.getUserById(authenticationData.id)

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role,
    })
  } catch (err) {
    res.status(400).send({message: err.message,})
  }

  await BaseDatabase.destroyConnection()
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string

    const authenticator = new Authenticator()
    authenticator.getData(token)

    const id = req.params.id

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserById(id)

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    })
  } catch (err) {
    res.status(400).send({message: err.message,})
  }
  
  await BaseDatabase.destroyConnection()
});

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string

    const authenticator = new Authenticator()
    const authenticationData = authenticator.getData(token)

    if (authenticationData.role !== "admin") {
      throw new Error("Only a admin user can access this funcionality");
    }

    const id = req.params.id

    const userDatabase = new UserDatabase()
    await userDatabase.deleteUser(id)

    res.sendStatus(200).send({message: "User successfully deleted"})
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }

  await BaseDatabase.destroyConnection()
})

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})