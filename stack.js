//Implementing Stack with Linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class Stack {
    //constructor creates the very first node
    constructor() {
        this.top = null
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top
    }
    //For stack add on top
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            const holding = this.top;
            this.top = newNode;
            this.top.next = holding
        }
        this.length++
    }
    pop() {
        if (this.length === 0) {
            this.bottom = null;
        }
        this.top = this.top.next
        this.length--
        //The un-referenced value will be removed automaticall by the garbage collector
    }
    isEmpty() {

    }

}

const obj = new Stack(10);
obj.push("p")

obj.push("e")

obj.push("ooooo")
console.log(obj.peek())
//output
// Node { value: 'e', next: Node { value: 'p', next: null } }
obj.pop()
console.log(obj.peek())
obj.pop()
console.log(obj.peek())


