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
        this.arr=[]
    }
    peek() {
        return this.arr[this.arr.length-1]
    }
    push(value) {
       return this.arr.push(value)
    }
    pop() {
        return this.arr.pop()
        
    }
    isEmpty() {
        return this
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


