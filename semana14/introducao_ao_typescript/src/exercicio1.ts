// 1) a) const minhaString: string = "Julio Gabriel"
// const minhaStrig: string = 10 //Acusou um erro dizendo que 10 não é um valor do tipo string

// 1) b) const meuNumero: number | string = 10

/* 1) c)type pessoa = {
            nome: string,
            idade: number,
            corFavorita: string
        }   

        const julio: pessoa = {
            nome: "Julio",
            idade: 23,
            corFavorita: "Azul",
        }
*/ 

/* 1) d)

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const julio: pessoa = {
    nome: "Julio",
    idade: 23,
    corFavorita: "Azul",
} 

const ronaldo: pessoa = {
    nome: "Ronaldo",
    idade: 25,
    corFavorita: "Verde"
}

const patricia: pessoa = {
    nome: "Patricia",
    idade: 21,
    corFavorita: "Rosa"
}

const gloria: pessoa = {
    nome: "gloria",
    idade: 43,
    corFavorita: "Branco"
} */

/* 1) e) 

enum CORES_ARCO_IRIS {
    violeta = "Violeta",
    anil = "Anil",
    azul = "Azul",
    verde = "Verde",
    amarelo = "Amarelo",
    laranja = "Laranja",
    vermelho = "Verde",
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS
}

const julio: pessoa = {
    nome: "Julio",
    idade: 23,
    corFavorita: CORES_ARCO_IRIS.azul,
} 

const ronaldo: pessoa = {
    nome: "Ronaldo",
    idade: 25,
    corFavorita: CORES_ARCO_IRIS.verde
}

const patricia: pessoa = {
    nome: "Patricia",
    idade: 21,
    corFavorita: CORES_ARCO_IRIS.vermelho
}

const gloria: pessoa = {
    nome: "gloria",
    idade: 43,
    corFavorita: CORES_ARCO_IRIS.violeta
}

*/