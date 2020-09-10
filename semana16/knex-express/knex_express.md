### Exercicio 1

a) Quando usamos o raw obtemos como resposta um array com dois arrays um com vários objetos FieldPacket e um array com vários ROWDATAPACKET que são os dados que realmente precisamos e que estão no banco de dados. Por isso, temos que pegar a resposta e inserir o índice em que está localizado os dados que queremos e se quiser um dado em específico que você onde sabe onde está pode colacar novamente mais um índice.

b) 

~~~TypeScript
const getActorByName = async (name: string) : Promise<any> => {
    try {
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)

    console.log(result[0][0])

    return result[0][0]
    } catch (error) {
        console.log(error.message)
    }
}
~~~

c) 

~~~TypeScript
const getQuantityActorByGender = async (gender: string) : Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
        `)

        console.log(result[0][0])
        return result[0][0]
    } catch (error) {
        console.log(error.message)
    }
}
~~~

### Exercício 2

a) 

~~~TypeScript
const updateActor = async (salary: number, id: string) : Promise<void> => {
    try {
       await connection("Actor")
        .update({
            salary,
        })
        .where("id", id)

        console.log("Salário atualizado com sucesso.")
    } catch (error) {
        console.log(error.message)
    }
}
~~~~

b) 

~~~TypeScript
const deleteActor = async (id: string) : Promise<void> => {
    try {
        await connection("Actor")
            .delete()
            .where("id", id)
        
        console.log("Ator deletado com sucesso")
    } catch (error) {
        console.log(error.message)
    }
}
~~~

c) 

~~~TypeScript
const getAveragePerGenderSalary = async (gender: string) :Promise<any> => {
    try {
        const result = await connection("Actor")
            .avg("salary as average")
            .where({ gender })
            
        console.log(result[0].average)
            
        return result[0].average
    } catch (error) {
        console.log(error.message)
    }
}
~~~~

### Exercício 3

a) O id está sendo lido assim porque estamos pegando o id por path params.

b) A linha abaixo está dizendo que a requisição foi feita corretamente e e está enviando a resposta do banco de dados. 

~~~TypeScript
res.status(200).send(actor)
~~~

A linha abaixo está dizendo que a requisição foi feita, porém ocorreu um erro e envia exatamente a mensagem dizendo qual o erro que deve ser corrigo para obter a resposta.

~~~TypeScript
res.status(400).send({message: err.message,});
~~~

c) 

~~~TypeScript~
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const result = await getQuantityActorByGender(req.query.gender as string)
        res.status(200).send({quantity: result})
    }
    catch (error) {
        res.status(400).send({message: error.message})
    }
})
~~~

### Exercício 4

a) 

~~~TypeScript
app.post("/actor", async (req: Request, res: Response) => {
    try {
        await updateActor(req.body.salary, req.body.id)
        res.status(200).send({})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})
~~~

b) 

~~~TypeScript
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).send({})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
~~~

### Exercício 5

~~~TypeScript
const createMovie = async (
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    rating: number
) : Promise<void> => {
    try {
        await connection
            .insert({
                id,
                title,
                synopsis,
                release_Date: releaseDate,
                rating,
            })
            .into("Movie")

        console.log("Filme criado com sucesso")
    } catch (error) {
        console.log(error.message)
    }
}

app.post("/movie", async (req: Request, res: Response) => {
    try {
        await createMovie(
            req.body.id,
            req.body.title,
            req.body.synopsis,
            req.body.release_Date,
            req.body.rating
        )
        res.status(200).send({})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})
~~~

### Exercício 6

~~~TypeScript
const getAllMovies = async () : Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Movie LIMIT 15
        `)
        return result[0]
    } catch (error){
        console.log(error.message)
    }
}

app.get("/movie/all", async (req: Request, res: Response) => {
    try {
        const result = await getAllMovies()
        res.status(200).send({movies: result})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})
~~~

### Exercício 7

~~~TypeScript
const searchMovie = async (query: string) : Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Movie
            WHERE title LIKE "%${query}%" OR synopsis LIKE "%${query}%"
            ORDER BY release_Date ASC
        `)
        return result[0]
    } catch (error) {
        console.log(error.message)
    }
}

app.get("/movie/search", async (req: Request, res: Response) => {
    try {
        const result = await searchMovie(req.query.query as string)
        res.status(200).send({
            movies: result,
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})
~~~