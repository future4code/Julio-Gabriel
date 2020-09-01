import { User } from './User'
import moment from 'moment'

moment.locale("pt-BR")

export class Employee extends User {
    protected admissionDate: string
    protected baseSalary: number
    protected static BENEFITS_VALUE: number = 400

    constructor(
        id: string, 
        email: string, 
        name: string, 
        password: string, 
        admissionDate: string, 
        baseSalary: number) {
            super(id, email, name, password)
            this.admissionDate = moment(`${admissionDate}`, "DD/MM/YYYY").format("DD/MM/YYYY")
            this.baseSalary = baseSalary
        }
    
    public getAdmissionDate() : string {
        return this.admissionDate
    }
    
    public getBaseSalary() : number {
        return this.baseSalary
    }

    public calculateTotalSalary() : number {
        return this.baseSalary + Employee.BENEFITS_VALUE
    }
}