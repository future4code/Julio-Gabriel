import moment from 'moment'
import fs from 'fs'

moment.locale("pt-br")

// Exercício 1

type event = {
    nome: string,
    descricao: string,
    inicio: moment.Moment,
    fim: moment.Moment 
}

const events: event[] = [
    {
		nome: "Reunião",
		descricao: "Reunião muito importante",
		inicio: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
	 	fim: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
	},
	{
		nome: "Reuniãozinha",
		descricao: "Reunião não muito importante",
		inicio: moment("27/08/2020 17:00", "DD/MM/YYYY HH:mm"),
	 	fim: moment("27/08/2020 18:00", "DD/MM/YYYY HH:mm")
	}
]

const dataInicio: string = process.argv[2]
const dataFinal: string = process.argv[3]
const nomeEvento: string = process.argv[4]
const descricao: string = process.argv[5]
const data: string = fs.readFileSync('./events.json').toString()
let arrayEvents

try {
    arrayEvents = JSON.parse(data) 
} catch (error) {
    arrayEvents = []
    console.log(error.message)
}

const dataInicial: moment.Moment = moment(`${dataInicio}`, "DD/MM/YYYY HH:mm")
const dataEncerramento: moment.Moment = moment(`${dataFinal}`, "DD/MM/YYYY HH:mm")

// Exercício 2)a) e 3 estão sendo resolvidos na função showEvent. 

// OBS: A resposta do exercício 2)b) está abaixo no documento

function showEvent(arrayEvents: event[]) : void{

    events.forEach((item: event) => {
        const duracao: number = item.fim.diff(item.inicio, "minutes")
        const hoje: moment.Moment = moment()
        const diasAteOEvento: number = item.inicio.diff(hoje, "days")
        let exibeDiasAtéOEvento: number | string

        if (diasAteOEvento >= 0) {
            exibeDiasAtéOEvento = diasAteOEvento
        } else {
            exibeDiasAtéOEvento = "O evento já foi realizado."
        }

        console.log (`
            Nome: ${item.nome}
            Horário de início: ${item.inicio.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Horário de fim: ${item.fim.format("DD [de] MMMM [de] YYYY, HH:mm")}
            Descrição: ${item.descricao}
            Duração: ${duracao}
            Dias até o evento: ${exibeDiasAtéOEvento}
        `)
    })
}

// Exercício 4 está sendo resolvido na função createEvent

function createEvent (dataInicio: moment.Moment, dataFim: moment.Moment, nomeEvento: string, descricao: string) : void {
    if (!dataInicio || !dataFim || !nomeEvento || !descricao) {
        console.log("Por favor, insira os todos os parâmetros")
        return
    }

    const dataInicioParaHoje: number = dataInicio.diff(moment(), "seconds")
    const dataFimParaHoje: number = dataFim.diff(moment(), "seconds")
    
    if (dataInicioParaHoje > 0 && dataFimParaHoje > 0) {
        const evento: event = {
            nome: nomeEvento,
            descricao: descricao,
            inicio: dataInicio,
            fim: dataFim,
        }
        arrayEvents.push(evento)
    } else {
        console.log("A data não pode ser anterior à data atual")
    }
}

createEvent(dataInicial, dataEncerramento, nomeEvento, descricao)

try {
    console.log(arrayEvents)
    const updateEvents: string = JSON.stringify(arrayEvents, null, 3)
    fs.writeFileSync("./events.json", updateEvents)
} catch (error){
    console.log("error.message")
}

showEvent(arrayEvents)

/* 2) b)

import moment from 'moment'

type event = {
    nome: string,
    descricao: string,
    inicio: moment.Moment,
    fim: moment.Moment 
}

const events: event[] = [
    {
		nome: "Reunião",
		descricao: "Reunião muito importante",
		inicio: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
	 	fim: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
	},
	{
		nome: "Reuniãozinha",
		descricao: "Reunião não muito importante",
		inicio: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
	 	fim: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
	}
]

function showEvent(arrayEvents: event[]) : void{
    arrayEvents.forEach((item: event) => {
        console.log (`
            Nome: ${item.nome}
            Horário de início: ${item.inicio.utcOffset("+0000").format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Horário de fim: ${item.fim.utcOffset("+0000").format("DD [de] MMMM [de] YYYY, HH:mm")}
            Descrição: ${item.descricao}\n
        `)
    })
}

showEvent(events) */