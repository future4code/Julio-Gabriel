enum DC_AC {
    DC = "DC",
    AC = "AC"
}

function exercicio6(ano: number, cristo?: string) : string {
    const IdadeAntiga: number = 4000
    const IdadeMedia: number = 476
    const IdadeModerna: number = 1453
    const IdadeContemporanea: number = 1789
    let resultado: string = ""

    if (cristo === "DC" || cristo === undefined) {
        if (ano >= IdadeMedia && ano < IdadeModerna) {
            resultado = "Idade Média"
        } else if (ano >= IdadeModerna && ano < IdadeContemporanea) {
            resultado = "Idade Moderna"
        } else if (ano >= IdadeContemporanea) {
            resultado = "Idade Contemporanea"
        }
    } else if (cristo === "AC") {
        if (ano > IdadeAntiga) {
            resultado = "Pré História"
        } else {
            resultado = "Idade Antiga"
        }
    } else {
        resultado = "Inválido"
    }
    return resultado
}

console.log(exercicio6(1200, "DC"))