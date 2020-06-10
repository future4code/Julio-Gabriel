/* Exercício

function criarTarefa() {

    const tarefaCriada = document.getElementById("nova-tarefa")
    let tarefa = tarefaCriada.value
    const diaSelecionado = document.getElementById("selecao")
    let dia = diaSelecionado.value
    
    if (dia === "1") {
        const listaDeSegunda = document.getElementById("lista-segunda")
        listaDeSegunda.innerHTML += `<li> ${tarefa} </li>`
    }
    if (dia === "2") {
        const listaDeTerca = document.getElementById("lista-terca")
        listaDeTerca.innerHTML += `<li> ${tarefa} </li>`
    }
    if (dia === "3") {
        const listaDeQuarta = document.getElementById("lista-quarta")
        listaDeQuarta.innerHTML += `<li> ${tarefa} </li>`
    }
    if (dia === "4") {
        const listaDeQuinta = document.getElementById("lista-quinta")
        listaDeQuinta.innerHTML += `<li> ${tarefa} </li>`
    }
    if (dia === "5") {
        const listaDeSexta = document.getElementById("lista-sexta")
        listaDeSexta.innerHTML += `<li> ${tarefa} </li>`
    }
    if (dia === "6") {
        const listaDeSabado = document.getElementById("lista-sabado")
        listaDeSabado.innerHTML += `<li> ${tarefa} </li>`
    }
    if (dia === "7") {
        const listaDeDomingo = document.getElementById("lista-domingo")
        listaDeDomingo.innerHTML += `<li> ${tarefa} </li>`
    }

    tarefaCriada.value = ""
}

*/

/* Desafio 1 

function criarTarefa() {

    const tarefaCriada = document.getElementById("nova-tarefa")
    let tarefa = tarefaCriada.value
    const diaSelecionado = document.getElementById("selecao")
    let dia = diaSelecionado.value

    if (tarefa === "") {
        alert("Digite uma tarefa")
    } else {
        if (dia === "1") {
            const listaDeSegunda = document.getElementById("lista-segunda")
            listaDeSegunda.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "2") {
            const listaDeTerca = document.getElementById("lista-terca")
            listaDeTerca.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "3") {
            const listaDeQuarta = document.getElementById("lista-quarta")
            listaDeQuarta.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "4") {
            const listaDeQuinta = document.getElementById("lista-quinta")
            listaDeQuinta.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "5") {
            const listaDeSexta = document.getElementById("lista-sexta")
            listaDeSexta.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "6") {
            const listaDeSabado = document.getElementById("lista-sabado")
            listaDeSabado.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "7") {
            const listaDeDomingo = document.getElementById("lista-domingo")
            listaDeDomingo.innerHTML += `<li> ${tarefa} </li>`
        }
    }   
    tarefaCriada.value = ""
}

*/

/* Tentativa de fazer o desafio 2, porém falhou

function criarTarefa() {

    const tarefaCriada = document.getElementById("nova-tarefa")
    let tarefa = tarefaCriada.value
    const diaSelecionado = document.getElementById("selecao")
    let dia = diaSelecionado.value

    if (tarefa === "") {
        alert("Digite uma tarefa")
    } else {
        if (dia === "1") {
            const listaDeSegunda = document.getElementById("lista-segunda")
            listaDeSegunda.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "2") {
            const listaDeTerca = document.getElementById("lista-terca")
            listaDeTerca.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "3") {
            const listaDeQuarta = document.getElementById("lista-quarta")
            listaDeQuarta.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "4") {
            const listaDeQuinta = document.getElementById("lista-quinta")
            listaDeQuinta.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "5") {
            const listaDeSexta = document.getElementById("lista-sexta")
            listaDeSexta.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "6") {
            const listaDeSabado = document.getElementById("lista-sabado")
            listaDeSabado.innerHTML += `<li> ${tarefa} </li>`
        }
        if (dia === "7") {
            const listaDeDomingo = document.getElementById("lista-domingo")
            listaDeDomingo.innerHTML += `<li> ${tarefa} </li>`
        }
    } 

    tarefaCriada.value = ""
}

function riscarTexto () {
    const riscaTexto = document.getElementsByTagName("li")
    riscaTexto.innerHTML += 
}

*/


