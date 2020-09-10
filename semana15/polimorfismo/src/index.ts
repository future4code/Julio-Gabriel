import { Client } from './Client'
import { Place } from './Place'
import { Residence } from './Residence'
import { Commerce} from './Commerce'
import { Industry } from './Industry'
import { ResidentialClient } from './ResidentialClient'
import { CommercialClient } from './CommercialClient'
import { IndustrialClient } from './IndustrialClient'
import { ClientManager } from './ClientManager'

// 1)

/* const client: Client = {
  name: "João",
  registrationNumber: 1,
  consumedEnergy: 50,
  
    calculateBill: () => {
      return 2
    }
}

console.log(`
  Nome: ${client.name}
  Número de Registro: ${client.registrationNumber}
  Consumo de Energia: ${client.consumedEnergy} kWh
  Conta: R$${client.calculateBill().toFixed(2)}
`) */

/* 1) a)Consegui imprimir o name, registrationNumber, consumedEnergy e o método calculateBill. Consegui imprimir tudo. 
Isso foi possível porque o tipo Client é uma interface, e o quer dizer que todas as propriedades e métodos são públicos
e são obrigatórios no objeto ou classe a que forem implementados. */

// 2)

// 2) a)

/* const place: Place = new Place("88830-000") */

// O erro que o TypeScript gerou foi: Cannot create an instance of an abstract class.

// 2) b) Torna-lá uma classe normal sem ser abstrata.

// 3)

/* const residence: Residence = new Residence(4, "88830-000")
const commerce: Commerce = new Commerce(2, "88830-001")
const industry: Industry = new Industry(10, "88830-002")

console.log(`
  CEP Da Residência: ${residence.getCep()}
  CEP Do Comercío: ${commerce.getCep()}
  CEP Da Industra: ${industry.getCep()}
`) */

// 4)

/* const residentClient: ResidentialClient = new ResidentialClient("123.123.123-12", "João", 1, 50, "88830-000", 4)
console.log(`
  Nome: ${residentClient.name}
  Número de Registro: ${residentClient.registrationNumber}
  Consumo de Energia: ${residentClient.consumedEnergy}
  CEP: ${residentClient.getCep()}
  CPF: ${residentClient.getCpf()}
  Números de moradores na residência: ${residentClient.getResidentsQuantity()}
  Valor da Conta: R$${residentClient.calculateBill().toFixed(2)}
`) */

/* 4) a) Propriedades: name, registrationNumber, consumedEnergy, cpf, cep, residentsQuantity. 
Métodos: getCep, getCpf, getResidentsQuantity, calculateBill. Possui todos esses métodos e propriedades pois herdou
da classe e da interface. */

// 5

/* const commercialClient: CommercialClient = new CommercialClient("00.000.0000/0000-00", "Padaria do João", 1, 100, 2, "888830-000")

console.log(`
  Nome: ${commercialClient.name}
  Número de Registro: ${commercialClient.registrationNumber}
  Consumo de Energia: ${commercialClient.consumedEnergy}
  CEP: ${commercialClient.getCep()}
  CNPJ: ${commercialClient.getCnpj()}
  Números de andares: ${commercialClient.getFloorsQuantity()}
  Valor da Conta: R$${commercialClient.calculateBill().toFixed(2)}
`) */

/* 5) a) Possui estas mesmas propriedades: name, registrationNumber, consumedEnergy, cep. 
Possui os mesmmos Métodos: getCep, calculateBill. */

/* 5) b) A classe ResidentClient possui um CPF e aqui possuímos um CNPJ em relação as propriedades é isso. 
Já os métodos diferentes são o getFloorsQuantity aqui e na classe ResidentClient é getResidentQuantity, getCnpj aqui e
na classe ResidentClient getCPF, e também aqui mudar a constante de multiplicação para descobrir o valor da conta. */

// 6

/* const industrialClient: IndustrialClient = new IndustrialClient(1, "Industria do João", 1, 100, 10, "88830-000")

console.log(`
  Nome: ${industrialClient.name}
  Número de Registro: ${industrialClient.registrationNumber}
  Consumo de Energia: ${industrialClient.consumedEnergy}
  CEP: ${industrialClient.getCep()}
  Número Industrial: ${industrialClient.getIndustryNumber()}
  Números de máquinas: ${industrialClient.getMachinesQuantity()}
  Valor da Conta: R$${industrialClient.calculateBill().toFixed(2)}
`) */

/* 6) a) IndustrialClient deve ser filha de Industry, pois ela precisa da quantidade de máquinas na sua indústria para 
conseguir realizar o calculo do valor da conta. */

/* 6) b) IndustrialClient deve implementar a interface Client, pois ela precisa acessar o método para calcular o valor
da conta. */

/* 6) c) Porque não precisamos modificar nenhum valor de propriedade. */

// 7 Era só criar a classe ClientManager

// 8

const clientManager = new ClientManager()
const residentClient: ResidentialClient = new ResidentialClient("123.123.123-12", "João", 1, 50, "88830-000", 4)
const commercialClient: CommercialClient = new CommercialClient("00.000.0000/0000-00", "Padaria do João", 2, 100, 2, "888830-000")
const industrialClient: IndustrialClient = new IndustrialClient(1, "Industria do João", 3, 100, 10, "88830-000")

clientManager.registerClient(residentClient)
clientManager.registerClient(commercialClient)
clientManager.registerClient(industrialClient)

console.log(clientManager.getClientsQuantity())
console.log(clientManager.calculateTotalClient(1).toFixed(2))
console.log(clientManager.calculateTotalIncome().toFixed(2))

console.log(clientManager.getClientsQuantity())

clientManager.deleteUser(4)
clientManager.deleteUser(2)

console.log(clientManager.getClientsQuantity())
console.log(clientManager)

// Desafio 1
clientManager.printClients()

// Desafio 2
const residentClient2: ResidentialClient = new ResidentialClient("123.123.123-12", "João", 1, 50, "88830-000", 4)
clientManager.registerClient(residentClient2)