import express from 'express'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { signup } from './endpoints/signup'
import { login } from './endpoints/login'
import { getUserProfile } from './endpoints/getUserProfile'

/* const idgenerator: IdGenerator = new IdGenerator()
const id: string = idgenerator.generate()

const userdatabase: UserDatabase = new UserDatabase()
userdatabase.createUser(id, "teste2@teste.com", "123456") */

dotenv.config()

const app = express()
app.use(express.json())

app.post('/signup', signup)
app.post('/login', login)
app.get('/user/profile', getUserProfile)

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})