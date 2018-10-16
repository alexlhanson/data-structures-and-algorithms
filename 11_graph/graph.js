'use strict';

const Queue = require('../05_stacks_queues/lib/queue');

class Graph {
  constructor() {
    this.vertices = {};
  }

  add(value, neighborsArr) {
    if (!value) { throw new Error('Error: no vertex value provided') }
    if (!neighborsArr) { throw new Error('Error: no neighbors array provided') }
    
    this.vertices[value] = neighborsArr;
  }

  breadthFirstTraversal(startVertex){
    if (!startVertex) {throw new Error('no starting vertex provided')}
    if (!this.vertices[startVertex]) {throw new Error('vertex not in graph')}

    let traversalQueue = new Queue;
    let visitedArr = [startVertex];

    traversalQueue.enqueue(startVertex);
    while(traversalQueue.size > 1){
      
    }
  }
}


module.exports = Graph;