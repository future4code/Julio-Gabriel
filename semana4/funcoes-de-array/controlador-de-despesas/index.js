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
        mostrarDespesas(arrayDespesas, despesaTotal)
        valorDespesaCriada.value = ""
        tipoDespesaCriada.value = ""
        descricaoDespesaCriada.value = ""
    } else {
        alert("Por favor, preencha todos os campos")
    }
}

function mostrarDespesas(array, soma) {
    const mapeandoValorDasDespesas = array.map((despesa, index, array) => {
        soma += despesa.valor    
        return despesa.valor, soma
    })
    const despesaTotal = document.getElementById("valor-total")
    despesaTotal.innerHTML = `<b>Despesa Total: ${soma}</b>`  
}




