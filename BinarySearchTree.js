class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}
class BinarySearchTree {
    //constructor creates the very first node
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        }
        else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //left
                    //If reached leaf node
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        //To stop looping
                        return this
                    }
                    //if not leaf set the next node to left as current node
                    currentNode = currentNode.left;
                }
                //right
                else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        //To stop loopingc
                        return this
                    }
                    //if not leaf node, set the next node to right as current node
                    currentNode = currentNode.right;
                }
            }
        }

    }
    lookup(value) {
        if (!this.root) return null
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            else {
                if (value < currentNode.value) {
                    currentNode = currentNode.left
                }
                else {
                    currentNode = currentNode.right
                }
            }
        }
        return false
    }

}

const obj = new BinarySearchTree();

//         9
//     4       20
// 1    6     15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

obj.insert(9)
obj.insert(4)
obj.insert(1)
obj.insert(6)
obj.insert(20)
obj.insert(15)
obj.insert(170)


console.log(JSON.stringify(obj.lookup(9)))
// console.log(JSON.stringify(traverse(obj.root)))
