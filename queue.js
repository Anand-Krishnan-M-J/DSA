//Implementing Stack with Linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class Queue {
    //constructor creates the very first node
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this
    }
    //For queue add node on last
    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
        if (!this.first) {
            return null
        }
        this.length--;
        if (this.length === 0) {
            this.last = null
            this.first = null;
        }
        else{
            return this.first = this.first.next
        }
        
    }
    isEmpty() {
        return this.arr.length === 0
    }

}

const obj = new Queue();
obj.enqueue("p")
obj.enqueue("o")
obj.enqueue("e")
obj.dequeue()
obj.dequeue()
obj.dequeue()

console.log(obj)