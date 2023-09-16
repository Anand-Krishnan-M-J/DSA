console.log("Hi")

//Example of linkedList implementation
let myLinkedList = {
    value: 12,
    next: {
        value: 14,
        next: {
            value: 45,
            next: {
                value: 19,
                next: {
                    value: 14,
                    next: null
                }
            }
        }
    }
}
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null
    }
}
class DoubleLinkedList {
    //constructor creates the very first node
    constructor(value) {
        this.head = {
            value: value,
            prev: null,
            next: null
        }
        ///initially tail is same as head
        this.tail = this.head;
        this.length = 1;

    }
    append(value) {
        const newNode = {
            value:value,
            next:null,
            prev:null
        }
        // set the prev of new node as current tail
        newNode.prev = this.tail;
        // set the next of prev as newNode
        this.tail.next = newNode;
        // set the current tail as newNode
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    traverseToIndex(index) {
        let nodeAtindex = this.head;
        for (let i = 0; i < index; i++) {
            nodeAtindex = nodeAtindex.next;

        }
        return nodeAtindex
    }
    insert(index, value) {
        const newNode = new Node(value);
        //Assume 0 indexed linkedlist
        if (index >= this.length) {
            this.append(value);
        }
        else if (index === 0) {
            this.prepend(value)
        }
        else {
            //node before the node where we wanna insert
            let leader = this.traverseToIndex(index - 1);
            newNode.next = leader.next;
            newNode.prev = leader;
            leader.next = newNode;
            
            let follower = this.traverseToIndex(index);
            follower.prev = newNode


        }
        this.length++
        return this
    }
    remove(index) {
        if (index === 0) {
            this.head = this.head.next
        }
        else if(index>=this.length-1){
            console.log("invalid index")
        }
        else{
            let leader = this.traverseToIndex(index - 1);
            leader.next = leader.next.next;
            let follower = this.traverseToIndex(index);
            follower.prev = leader.next;
        }
        

    }
    printLinkedList() {
        let arr = [];
        for (let i = 0; i < this.length ; i++) {
            const node = this.traverseToIndex(i);
            if (node?.value) {
                arr.push(node.value)
            }

        }
        console.log(arr)
    }
}

const obj = new DoubleLinkedList(10);

// console.log(obj.append(12))
console.log(obj.prepend(62))
console.log(obj.append(62))
console.log(obj.remove(2))
// console.log(obj.insert(1, 800))
// obj.remove(7)
obj.printLinkedList()



