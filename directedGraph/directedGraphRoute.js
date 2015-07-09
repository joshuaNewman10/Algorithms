function graph () {
  this.edgeList = [];
}

graph.prototype.addEdge = function (start, end) {
  if ( this.edgeList[start] === undefined ) {
    this.edgeList[start] = [];
  }
  this.edgeList[start].push(end);
};

graph.prototype.depthFirstSearch = function (start, target) {
  var found = false;
  var graph = this;
  var innerFunction = function (currentNode) {
    //Base Case
    console.log(currentNode, target);
    if ( currentNode === target ) {
      found = true;
      return;
    }
    var edges  = graph.edgeList[currentNode];
    if ( edges == undefined ) {
      return;
    }
    debugger;
    for ( var i=0; i<edges.length; i++ ) {
      var nodeList = graph.edgeList[currentNode];
      innerFunction(nodeList[i]);
    }
  };
  innerFunction(start);
  return found;
}

var myGraph = new graph();
myGraph.addEdge(0,1);
myGraph.addEdge(0,2);
myGraph.addEdge(1,2);
myGraph.addEdge(1,3);
myGraph.addEdge(2,4);
myGraph.addEdge(3,4);

console.log(myGraph);
console.log(myGraph.depthFirstSearch(0, 4));

