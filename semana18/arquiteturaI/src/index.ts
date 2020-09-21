import express from "express"
import dotenv from 'dotenv'
import { AddressInfo } from "net"
import { signup } from "./endpoints/CreateUser"
import { login } from "./endpoints/Login"
import { getAllUsers } from "./endpoints/getAllUsers"
import { deleteUser } from "./endpoints/deleteUser"

const app = express()
app.use(express.json())

dotenv.config()

app.put('/signup', signup)
app.post('/login', login)
app.get('/all', getAllUsers)
app.delete('/:id', deleteUser)

const server = app.listen(3000, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})