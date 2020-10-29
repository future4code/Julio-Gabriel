import { numbers } from "./exercicio1"
import { firstNode } from "./exercicio2"
import { queue } from "./exercicio3"

console.log("Exercício 1")
numbers.print()
numbers.appendToTail(5)
numbers.print()

console.log("Exercício 2")
console.log(firstNode.isEmpty())
firstNode.push(1)
firstNode.push(2)
firstNode.pop()
firstNode.print()
console.log(firstNode.isEmpty())

console.log("Exercício 3")
console.log(queue.isEmpty())
queue.print()
queue.enqueue(6)
queue.print()
queue.dequeue()
queue.print()