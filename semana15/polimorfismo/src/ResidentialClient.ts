import { Residence } from './Residence'
import { Client } from './Client'

export class ResidentialClient extends Residence implements Client {
    
    constructor(
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number, 
        cep: string, 
        residentsQuantity: number) {
            super(residentsQuantity, cep)
            this.cpf = cpf
            this.name = name
            this.registrationNumber = registrationNumber
            this.consumedEnergy = consumedEnergy
        }

    getCpf() : string {
        return this.cpf
    }

    calculateBill() : number {
        return this.consumedEnergy * 0.75
    } 
}