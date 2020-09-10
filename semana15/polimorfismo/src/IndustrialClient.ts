import { Industry } from './Industry'
import { Client } from './Client'

export class IndustrialClient extends Industry implements Client {
    constructor(
        private industryNumber: number, 
        public name: string, 
        public registrationNumber: number, 
        public consumedEnergy: number, 
        machinesQuantity: number, 
        cep: string) {
            super(machinesQuantity, cep)
            this.industryNumber = industryNumber
            this.name = name
            this.registrationNumber = registrationNumber
            this.consumedEnergy = consumedEnergy
        }

    getIndustryNumber() : number {
        return this.industryNumber
    }

    calculateBill() : number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}