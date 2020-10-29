import { LinkedList, LinkedListNode, firstNode } from "./exercicio1"

export class Queue {
    public nodes: LinkedList = new LinkedList(firstNode)
  
    isEmpty(): boolean {
        return this.nodes.start === undefined
    }
  
    enqueue(value: number): void {
        this.nodes.appendToTail(value)
    }
  
    dequeue(): void {
        if (this.nodes.start) {
            const nodeToDequeue = this.nodes.start
            this.nodes.start = this.nodes.start.next
        }
    }
  
    print(): void {
        this.nodes.print()
    }
}

export const queue: Queue = new Queue()