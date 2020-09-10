import { Employee } from './Employee'

export class Seller extends Employee {
    private salesQuantity: number = 0
    private static SELLING_COMMISSION: number = 5

    public setSalesQuantity(quantity: number) : void {
        this.salesQuantity += quantity 
    }

    public getSalesQuantity() : number {
        return this.salesQuantity
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE + this.salesQuantity * Seller.SELLING_COMMISSION;
    }
}