/* 1) a)

type post = {
    autor: string,
    texto: string
}

const post1: post = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver" 
}
  
const post2: post = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}

const post3: post = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}

const post4: post = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}

const post5: post = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

const posts: post[] = [post1, post2, post3, post4, post5] 

*/

/* 1) b)

type post = {
    autor: string,
    texto: string
}

const post1: post = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver" 
}
  
const post2: post = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}

const post3: post = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}

const post4: post = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}

const post5: post = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

const posts: post[] = [post1, post2, post3, post4, post5]

function buscarPostsPorAutor(posts: post[], autorInformado: string) : post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
}

console.log(buscarPostsPorAutor(posts, "Lord Voldemort")) */