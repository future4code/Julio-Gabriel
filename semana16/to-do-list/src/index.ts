import moment from 'moment'
import knex from 'knex'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import { AddressInfo } from 'net'

dotenv.config()
const app = express()
app.use(express.json())
moment.locale('pt-br')

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const server = app.listen(3000, () => {
    if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
    } else {
    console.error(`Failure upon starting server.`);
    }
})

async function createTableToDoListUser() : Promise<void> {
    try {
        await connection.raw(`
            CREATE TABLE TodoListUser (
                id VARCHAR(255) PRIMARY KEY, 
                name VARCHAR(255) NULL, 
                nickname VARCHAR(255) UNIQUE NOT NULL, 
                email VARCHAR(255) UNIQUE NOT NULL
            );
        `)

        console.log("Tabela de usuários criada com sucesso")
    } catch (error) {
        console.log(error.message)
    }
}

async function createTableToDoListTask() : Promise<void> {
    try {
        await connection.raw(`
            CREATE TABLE TodoListTask (
                id VARCHAR(255) PRIMARY KEY, 
                title VARCHAR(255) NOT NULL, 
                description TEXT NOT NULL, 
                status VARCHAR(255) NOT NULL DEFAULT "to_do",
                limit_date DATE NOT NULL,
                creator_user_id varchar(255) NOT NULL,
                FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
            );
        `)

        console.log("Tabela de tarefa criada com sucesso")
    } catch (error) {
        console.log(error.message)
    }
}

async function createTableToDoListResponsibleUserTaskRelation() : Promise<void> {
    try {
        await connection.raw(`
            CREATE TABLE TodoListResponsibleUserTaskRelation (
                task_id VARCHAR(255),
                responsible_user_id VARCHAR(255),
                FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
                FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
            );
        `)

        console.log("Tabela de Usuário Responsável e Tarefa criada com sucesso")
    } catch (error) {
        console.log(error.message)
    }
}

const createUser = async (
    name: string,
    nickname: string,
    email: string
) : Promise<void> => {
    await connection
        .insert({
            id: moment().unix().toString(),
            name,
            nickname,
            email,
        })
        .into("TodoListUser")
}

const createTask = async (
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string
) : Promise<void> => {
        await connection
        .insert({
            id: moment().unix().toString(),
            title,
            description,
            status: "to_do",
            limit_Date: moment(`${limitDate}`, "DD/MM/AAAA").format("YYYY-MM-DD"),
            creator_user_id: creatorUserId
        })
        .into("TodoListTask")
}

const getUserById = async (id: string) : Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM TodoListUser WHERE id = '${id}'
    `)

    return result[0][0]
}

const getTaskById = async (id: string) : Promise<any> => {
        const result: any[] = await connection.raw(`
            SELECT t.id, t.title, t.description, t.status, t.limit_date, t.creator_user_id, u.name FROM TodoListTask t
            LEFT JOIN TodoListUser u ON t.creator_user_id = u.id;
        `)

        return result[0]
}

const editUser = async (id: string, name: string, nickname: string, email: string) : Promise<any> => {
    const result = await connection("TodoListUser")
    .update({
        name,
        nickname,
        email,
    })
    .where("id", id)

    return result
}

app.put("/user", async (req: Request, res: Response) => {
    const name: string = req.body.name as string
    const nickname: string = req.body.nickname as string
    const email: string = req.body.email as string
    
    if (name !== "" && nickname !== "" && email !== "") {
        try {
            await createUser (name, nickname, email)
            res.status(200).send({message: "Usuário criado com sucesso"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    } else {
        res.status(400).send({message: "Faltou preencher algum campo"})
    }
})

app.get("/user/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id as string
    if (id !== "") {
        try {
            const result = await getUserById(id)
            const response = {id: result.id, nickname: result.nickname}
    
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    } else {
        res.status(400).send({message: "Por favor insira o id do usuário"})
    }
})

app.get("/task/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id as string

    if (id !== "") {
        try {
            const result = await getTaskById(id)
            let response: any | null = null
    
            result.forEach((task: any) => {
                if (task.id === id) {
                    response= {
                        taskId: task.id,
                        title: task.title,
                        description: task.description,
                        limitDate: moment(task.limit_date).format("DD/MM/YYYY"),
                        status: task.status,
                        creatorUserId: task.creator_user_id,
                        creatorUserNickname: task.name
                    }
                }
            })
    
            if (response !== null) {
                res.status(200).send(response)
            } else {
                res.status(400).send({message: "Não encontramos nenhuma tarefa com este ID."})
            }

        } catch (error) {
            res.status(400).send({message: error.message})
        }
    } else {
        res.status(400).send({message: "Por favor insira o id da Tarefa"})
    }
})

app.post("/user/edit/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id as string
    const name: string = req.body.name as string 
    const nickname: string = req.body.nickname as string
    const email: string = req.body.email as string
    
    if (id !== "" && name !== "" && nickname !== "" && email !== "") {
        try {
            await editUser(id, name, nickname, email)
    
            res.status(200).send({message: "Sucess"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    } else {
        res.status(400).send({message: "Por favor preencha todos os campos"})
    }
})

app.put("/task", async (req: Request, res: Response) => {
    const title: string = req.body.title
    const description: string = req.body.description
    const limitDate: string = req.body.limitDate
    const id: string = req.body.creatorUserId

    if (title !== "" && description !== "" && limitDate !== "" && id !=="") {
        try {
            await createTask(title, description, limitDate, id)

            res.status(200).send({message: "Sucess"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    } else {
        res.status(400).send({message: "Por favor preencha todos os campos"})
    }
})