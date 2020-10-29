export class LinkedListNode {
    constructor(
        public value: any,
        public next: LinkedListNode | undefined = undefined
    ) {}
}

 export class LinkedList {
    constructor(public start?: LinkedListNode | null) {}
  
    public appendToTail(value: number) {
        if (!this.start) {
            this.start = new LinkedListNode(value)
        } else {
            let node: LinkedListNode = this.start

            while (node && node.next !== undefined) {
                node = node.next!
            }

            node.next = new LinkedListNode(value)
        }
    }
  
    public print(): void {
        let node: LinkedListNode | undefined | null= this.start

        let i = 1

        while (node !== undefined) {
            console.log(`Elemento ${i}: `, node!.value)
            node = node!.next,
            i++
        }
    }
}

export const firstNode:  LinkedListNode = new LinkedListNode(
    1,
    new LinkedListNode(
        2,
        new LinkedListNode(
            3,
            new LinkedListNode(
                4
            )
       )
    )
 )
 
 export const numbers: LinkedList = new LinkedList(firstNode)