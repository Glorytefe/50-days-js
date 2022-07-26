class Node{
    constructor(value){
        this.value = value;
        this.edgeList = [];
    }

    connect(node){
        this.edgeList.push(node);
    }

    findAdjacent(){
        return this.edgeList.map(node => node.value);
    }

    isConnected(node){
        return !!this.edgeList.filter(curr => curr.value === node.value).length;
    }
}

class Graph{
    constructor(nodes){
        this.nodes = nodes;
    }

    add(node){
        this.nodes.push(node);
    }
}




const constructPath = (visitedNodes, target) => {
    const result = [];
    let currentNode = target;
    while (currentNode !== null) {
        result.push(currentNode.value);
        currentNode = visitedNodes[currentNode.value];
    }
    return result.reverse();
}

const shortest = (node, end) => {
    const queue = [node];
    const visitedNodes = {};
    visitedNodes[node.value] = null;

    while (queue.length) {
        let curr = queue.shift();
        if(curr.value === end.value) return constructPath(visitedNodes, end);
        for (const edge of curr.edgeList) {
            if(!visitedNodes.hasOwnProperty(edge)){
                visitedNodes[edge.value] = curr;
                queue.push(edge);
            }
        }
    }
}

const dfs = (start, visitedNodes, top) => {
    if(visitedNodes.has(start)) return;
    visitedNodes.add(start);
    for ( const edge of start.edgeList) {
        dfs(edge, visitedNodes, top);
    }
    top.push(start.value)
}

const topo = (nodes) => {
   
    let visitedNodes = new Set();
    let result = [];
    for (let i = 0; i < nodes.length; i++){
        let curr = nodes[i];
        dfs(curr, visitedNodes, result)
    }
    return result.reverse();
}


const DFW = new Node("DFW");
const LAG = new Node("LAG");
const NYK = new Node("NYK");
const SA = new Node("SA");
const DMK = new Node("DMK");

DFW.connect(NYK);
DFW.connect(SA);
NYK.connect(LAG);
SA.connect(DMK);
DMK.connect(LAG);

// const graph = new Graph([DFW, SA, NYK, DMK, LAG]);


const nodeA = new Node('A');
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')
const nodeE = new Node('E');
const nodeF = new Node('F');


nodeA.connect(nodeB)
nodeA.connect(nodeC)
nodeB.connect(nodeD)
nodeD.connect(nodeF)
nodeE.connect(nodeF)
nodeE.connect(nodeC)




const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE, nodeF]);
// console.log(graph.topologicalOrder());
// console.log(shortest(DFW, LAG));
console.log(topo(graph.nodes));