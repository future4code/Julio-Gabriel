import { User } from './User'
import { Customer } from './Customer'
import { Employee } from './Employee'
import { Seller } from './Seller'
import { SaltyDish, feijoada, arroz } from './saltydish'
import { Dessert, brigadeiro, pudim } from './dessert'
import { Dish } from './dish'

// 1) 

/* const user: User = new User("1", "ricardo@email.com", "Ricardo", "password")
console.log(`O nome é ${user.getName()}, o email é: ${user.getEmail()}, e o id é: ${user.getId()}`) */

// 1) a) Não, pois não possui um método getPassword na classe e o password é privado.
// 1) b) A mensagem "Chamando o construtor da classe User" foi exibida uma única vez.

// 2) 

/* const customer: Customer = new Customer("1", "ricado@email.com", "Ricardo", "password", "5112 4684 4801 9029")
console.log(`O nome é ${customer.getName()}, 
o email é: ${customer.getEmail()}, 
o id é: ${customer.getId()}, 
e o seu cartão de crédito é ${customer.getCreditCard()}`) */

// 2) a) A mensagem "Chamando o construtor da classe Customer" foi exibida uma única vez
/* 2) b) A mensagem "Chamando o construtor da classe User" foi exibida uma única vez pois a classe customer é filha
da classe User e por isso ela tem que chamar o construtor da classe User para conseguir guardar os valores e poder usar
os métodos. */

// 3)

/* const customer: Customer = new Customer("1", "ricado@email.com", "Ricardo", "password", "5112 4684 4801 9029")

customer.purchaseTotal = 10
console.log(`O nome é ${customer.getName()}, 
o email é: ${customer.getEmail()}, 
o id é: ${customer.getId()},
o valor da compra é: R$${customer.purchaseTotal.toFixed(2)} 
e o seu cartão de crédito é ${customer.getCreditCard()}`) */

// 3) a) Não, pois não possui um método getPassword na classe e o password é privado.

// 4) 

/* const customer: Customer = new Customer("1", "ricado@email.com", "Ricardo", "password", "5112 4684 4801 9029")

customer.purchaseTotal = 10
console.log(``${customer.introduceYourself()},
O nome é ${customer.getName()}, 
o email é: ${customer.getEmail()}, 
o id é: ${customer.getId()},
o valor da compra é: R$${customer.purchaseTotal.toFixed(2)} 
e o seu cartão de crédito é ${customer.getCreditCard()}`) */

// 5) 

/*const customer: Customer = new Customer("1", "ricado@email.com", "Ricardo", "password", "5112 4684 4801 9029")
console.log(`${customer.introduceYourself()},
O nome é ${customer.getName()}, 
o email é: ${customer.getEmail()}, 
o id é: ${customer.getId()},
o valor da compra é: R$${customer.purchaseTotal.toFixed(2)} 
e o seu cartão de crédito é ${customer.getCreditCard()}`) */

// 6)

/* const employee: Employee = new Employee("1", "ricardo@email.com", "Ricardo", "password", "18/02/2020", 1500)

console.log(`
  O seu nome é: ${employee.getName()}
  O seu ID é: ${employee.getId()}
  O seu email é: ${employee.getEmail()}
  A sua data de admissão é: ${employee.getAdmissionDate()}
  A sua base salarial é: ${employee.getBaseSalary()}
`) */

// 6) a) A mensagem "Chamando o construtor da classe User" foi impressa apenas uma vez no terminal.

// 6) b) Id, Nome, Email, Data de Admissão e Base Salarial.

// 7)

/* const employee: Employee = new Employee("1", "ricardo@email.com", "Ricardo", "password", "18/02/2020", 1500)

console.log(`
  O seu nome é: ${employee.getName()}
  O seu ID é: ${employee.getId()}
  O seu email é: ${employee.getEmail()}
  A sua data de admissão é: ${employee.getAdmissionDate()}
  A sua base salarial é: R$${employee.getBaseSalary().toFixed(2)}
  O seu salária total é: R$${employee.calculateTotalSalary().toFixed(2)}
`) */

// 8)

/* const seller: Seller = new Seller("1", "ricardo@email.com", "Ricardo", "password", "18/02/2020", 1500)

console.log(`
  O seu nome é: ${seller.getName()}
  O seu ID é: ${seller.getId()}
  O seu email é: ${seller.getEmail()}
  A sua data de admissão é: ${seller.getAdmissionDate()}
  A sua base salarial é: R$${seller.getBaseSalary().toFixed(2)}
  O seu salária total é: R$${seller.calculateTotalSalary().toFixed(2)}
`) */

// 8) a) Tive que passar o Id, email, nome, senha, data de admissão e a base salarial.

/* 8) b) Consegui imprimir o nome, id, email, data de admissão, base salarial e o salário total. Não consegui imprimir
o password porque ele não possui nenhum getter e também porque ele é um método privado. */

// 9)

/* const seller: Seller = new Seller("1", "ricardo@email.com", "Ricardo", "password", "18/02/2020", 1500)

seller.setSalesQuantity(1)
seller.setSalesQuantity(1)

console.log(`
  O seu nome é: ${seller.getName()}
  O seu ID é: ${seller.getId()}
  O seu email é: ${seller.getEmail()}
  O número de vendas que você efetuou é: ${seller.getSalesQuantity()}
  A sua data de admissão é: ${seller.getAdmissionDate()}
  A sua base salarial é: R$${seller.getBaseSalary().toFixed(2)}
  O seu salária total é: R$${seller.calculateTotalSalary().toFixed(2)}
`) */

// 9) a) Não era porque o enunciado não pedia um método público getter para salesQuantity, mas eu fiz o método.

// 10)

/* const seller: Seller = new Seller("1", "ricardo@email.com", "Ricardo", "password", "18/02/2020", 1500)

seller.setSalesQuantity(1)
seller.setSalesQuantity(5)

console.log(`
  O seu nome é: ${seller.getName()}
  O seu ID é: ${seller.getId()}
  O seu email é: ${seller.getEmail()}
  O número de vendas que você efetuou é: ${seller.getSalesQuantity()}
  A sua data de admissão é: ${seller.getAdmissionDate()}
  A sua base salarial é: R$${seller.getBaseSalary().toFixed(2)}
  O seu salária total é: R$${seller.calculateTotalSalary().toFixed(2)}
`) */

/* 10) a) Imprimiu no terminal o salário de R$1930,00 porque ele fez 6 vendas o que totalizou R$30,00 com mais R$1500,00
do salária base e R$400,00 com benefícios. Ele seguiu a função que estava no Seller em vez da que estava no User 
porque foi realizado um override.*/

// 11) 

/* const seller: Seller = new Seller("1", "ricardo@email.com", "Ricardo", "password", "18/02/2020", 1500)

seller.setSalesQuantity(1)
seller.setSalesQuantity(5)

console.log(`
  O seu nome é: ${seller.getName()}
  O seu ID é: ${seller.getId()}
  O seu email é: ${seller.getEmail()}
  O número de vendas que você efetuou é: ${seller.getSalesQuantity()}
  A sua data de admissão é: ${seller.getAdmissionDate()}
  A sua base salarial é: R$${seller.getBaseSalary().toFixed(2)}
  O seu salária total é: R$${seller.calculateTotalSalary().toFixed(2)}
`) */

const allDish: Dish[] = [arroz, feijoada, brigadeiro, pudim]
console.log(allDish)