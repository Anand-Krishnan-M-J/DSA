


// Implementing with adjacent list
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        //We use an object instead of array, to make dinding and shifting efficient
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList = { ...this.adjacentList, ...{ [node]: [] } }
        this.numberOfNodes++;
    }
    //To add connection btw 2 nodes
    addEdge(node1, node2) {
        // undirected connection
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);

    }
    //To check the work
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

// 3-----------4-------5
// |           |       |
// |           |       |
// |           |       |
// 1-----------2       6
//  \         /
//   \       /
//     \   /  
//       0
const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3','1');
myGraph.addEdge('3','4');
myGraph.addEdge('4','2');
myGraph.addEdge('4','5');
myGraph.addEdge('1','2');
myGraph.addEdge('1','0');
myGraph.addEdge('0','2');
myGraph.addEdge('6','5');

myGraph.showConnections()


