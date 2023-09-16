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
        this.next = null
    }
}
class LinkedList {
    //constructor creates the very first node
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        ///initially tail is same as head
        this.tail = this.head;
        this.length = 1;

    }
    append(value) {
        const newNode = new Node(value)
        //setting the next value to new node
        this.tail.next = newNode;
        //resetting the tail as the last node, because by the point that this line runs, 
        //the next key has been updated properly
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode
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
        if (index >= this.length - 1) {
            this.append(value);
        }
        else if (index === 0) {
            this.prepend(value)
        }
        else {
            //node before the node where we wanna insert
            let leader = this.traverseToIndex(index - 1);
            newNode.next = leader.next;
            leader.next = newNode;
        }
        this.length++
        return this
    }
    remove(index) {
        if (index === 0) {
            this.head = this.head.next
        }
        else if (index >= this.length - 1) {
            console.log("invalid index")
        }
        else {
            let leader = this.traverseToIndex(index - 1);
            leader.next = leader.next.next;
        }


    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first



    }
    printLinkedList() {
        let arr = [];
        for (let i = 0; i < this.length - 1; i++) {
            const node = this.traverseToIndex(i);
            if (node?.value) {
                arr.push(node.value)
            }

        }
        console.log(arr)
    }
}

const obj = new LinkedList(10);

console.log(obj.append(12))
console.log(obj.append(62))
obj.reverse()
// console.log(obj.insert(0, 900))
// console.log(obj.insert(1, 800))
// obj.remove(7)
obj.printLinkedList()



