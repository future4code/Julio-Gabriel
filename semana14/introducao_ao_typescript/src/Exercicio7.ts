type roupa = {
    nome: string,
    preco: number,
    classificao: string 
}

const peca1: roupa = {
    nome: "Camiseta de manga curta",
    preco: 95,
    classificao: "verao"
}

const peca2: roupa = {
    nome: "Moletom",
    preco: 150,
    classificao: "inverno"
}

const peca3: roupa = {
    nome: "Biquini",
    preco: 80,
    classificao: "banho"
}

const peca4: roupa = {
    nome: "Cueca",
    preco: 25,
    classificao: "íntimas"
}

const meuEstoque: roupa[] = [peca1, peca2, peca3, peca4]

function desconto(roupas: roupa[]) : roupa[] {

    type roupadesconto = {
        nome: string,
        preco: number,
        classificao: string,
        precodesconto: number
    }

    const array: roupadesconto[] = []

    roupas.forEach((roupa) => {
        if (roupa.classificao === "verao") {
            const peca: roupadesconto = {
                nome: roupa.nome,
                preco: roupa.preco,
                classificao: roupa.classificao,
                precodesconto: roupa.preco - (roupa.preco * (5/100))
            }
            array.push(peca)
        } else if (roupa.classificao === "inverno") {
            const peca: roupadesconto = {
                nome: roupa.nome,
                preco: roupa.preco,
                classificao: roupa.classificao,
                precodesconto: roupa.preco - (roupa.preco * (10/100))
            }
            array.push(peca)
        } else if (roupa.classificao === "banho") {
            const peca: roupadesconto = {
                nome: roupa.nome,
                preco: roupa.preco,
                classificao: roupa.classificao,
                precodesconto: roupa.preco - (roupa.preco * (4/100))
            }
            array.push(peca)
        } else if (roupa.classificao === "íntimas") {
            const peca: roupadesconto = {
                nome: roupa.nome,
                preco: roupa.preco,
                classificao: roupa.classificao,
                precodesconto: roupa.preco - (roupa.preco * (7/100))
            }
            array.push(peca)
        }
    })
    return array
}

console.log(desconto(meuEstoque))