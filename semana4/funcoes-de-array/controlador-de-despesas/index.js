let arrayDespesas = []
let despesaTotal = 0

function despesaCadastrada(arrayDespesas, mostrarDespesas) {
    const valorDespesaCriada = document.getElementById("valor-despesa")
    const tipoDespesaCriada = document.getElementById("selecao-tipos")
    const descricaoDespesaCriada = document.getElementById("descricao-despesa")
    if ((valorDespesaCriada.value !== "") && (descricaoDespesaCriada.value !== "") && (tipoDespesaCriada.value !== "") ){
        let despesa = {
            valor: Number(valorDespesaCriada.value),
            tipo:  tipoDespesaCriada.value,
            descricao: descricaoDespesaCriada.value 
        }
        arrayDespesas.push(despesa)
        console.log(arrayDespesas)
        mostrarValorDespesas(arrayDespesas, despesaTotal)
        valorDespesaCriada.value = ""
        tipoDespesaCriada.value = ""
        descricaoDespesaCriada.value = ""
    } else {
        alert("Por favor, preencha todos os campos")
    }
}

function mostrarValorDespesas(array, soma) {

    const mapeandoValorDasDespesas = array.map((despesa, index, array) => {
        soma += despesa.valor    
        return soma
    })
    
    const despesaTotal = document.getElementById("valor-total")
    despesaTotal.innerHTML = `<b>Despesa Total: ${soma}</b>`  
}

function filtragemDespesas(arrayDespesas) {

    const tipoDeDespesa = document.getElementById("selecao-tipos2")
    const valorMin = document.getElementById("valor-min")
    const valorMax = document.getElementById("valor-max")
    const insereLista = document.getElementById("lista-de-despesas")
    insereLista.innerHTML = ""

    if ((tipoDeDespesa.value !== "") && (valorMin.value !== "") && (valorMax.value !== "") ) {

        const filtroDespesas = arrayDespesas.filter((despesa, index, array) => {
            if ((despesa.tipo === tipoDeDespesa.value) && ((despesa.valor >= valorMin.value) && (despesa.valor <= valorMax.value))) {
                return true
            }
        })

        const mapeiaDespesas = filtroDespesas.map((elemento, index, array) => {
            insereLista.innerHTML += `<li>Valor: ${elemento.valor}, Tipo: ${elemento.tipo}, Descricao: ${elemento.descricao}</li>`
        })

    } else {
        alert("Por favor, preencha todos os campos")
    }

    
}

function mostraTudo(arrayDespesas) {
    
    const tipoDeDespesa = document.getElementById("selecao-tipos2")
    const valorMin = document.getElementById("valor-min")
    const valorMax = document.getElementById("valor-max")
    const insereLista = document.getElementById("lista-de-despesas")
    insereLista.innerHTML = ""

    const mapeiaTodasDespesas = arrayDespesas.map((elements, index, array) => {
        insereLista.innerHTML += `<li>Valor: ${elements.valor}, Tipo: ${elements.tipo}, Descricao: ${elements.descricao}</li>`
    })

    valorMin.value = ""
    valorMax.value = ""
    tipoDeDespesa.value = ""

}

