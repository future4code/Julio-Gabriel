/* Exercicio

let arrayPosts = []
let post

function criarPost() {
    const titulo = document.getElementById("meu-titulo")
    const autor = document.getElementById("meu-autor")
    const conteudo = document.getElementById("meu-conteudo")
    
    post = {
        titulo: titulo.value,
        autor:  autor.value,
        conteudo: conteudo.value 
    }

    arrayPosts.push(post)
    console.log(arrayPosts)
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}

function inserirPost() {
    let posts = document.getElementById("meus-posts")
    posts.innerHTML += `<h1>${post.titulo}</h1><h5>${post.autor}</h5><h3>${post.conteudo}</h3>`
} 

*/

/* Desafio 1

let arrayPosts = []
let post

function criarPost() {
    const titulo = document.getElementById("meu-titulo")
    const autor = document.getElementById("meu-autor")
    const conteudo = document.getElementById("meu-conteudo")
    const imagem = document.getElementById("minha-imagem")
    post = {
        titulo: titulo.value,
        autor:  autor.value,
        conteudo: conteudo.value, 
        imagem: imagem.value
    }

    arrayPosts.push(post)
    console.log(arrayPosts)
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    imagem.value = ""
}

function inserirPost() {

    let posts = document.getElementById("meus-posts")
    let linkImagem = post.imagem

    if ((linkImagem.includes(".jpeg")) || (linkImagem.includes(".png")) || (linkImagem.includes(".jpg"))) {
        posts.innerHTML += `<h1>${post.titulo}</h1><h5>${post.autor}</h5><h3>${post.conteudo}</h3> <img src= ${linkImagem}>`
    } else {
        posts.innerHTML += `<h1>${post.titulo}</h1><h5>${post.autor}</h5><h3>${post.conteudo}</h3>`
    }
}

*/


