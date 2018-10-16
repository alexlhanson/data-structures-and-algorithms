'use strict';

class Graph {
  constructor() {
    this.vertices = {};
  }

  add(value, neighborsArr) {
    if (!value) { throw new Error('Error: no vertex value provided') }
    if (!neighborsArr) { throw new Error('Error: no neighbors array provided') }

    this.vertices[value] = neighborsArr;
  }

  breadthFirstTraversal(startVertex) {
    if (!startVertex) { throw new Error('Error: no start vertex provided') }
    if (!this.vertices[startVertex]) { throw new Error('Error: vertex not in graph') }

    let traversalQueue = [startVertex];
    let visitedArr = [startVertex];
    
    while (traversalQueue.length) {
      let deQVertex = traversalQueue.shift();

      if (!visitedArr.includes(deQVertex)) {
        visitedArr.push(deQVertex);
      }

      this.vertices[deQVertex].forEach(neighbor => {
        if (!visitedArr.includes(neighbor)) {
          traversalQueue.push(neighbor);
        }
      });
    }
    console.log(visitedArr);
    return visitedArr;
  };
};

module.exports = Graph;