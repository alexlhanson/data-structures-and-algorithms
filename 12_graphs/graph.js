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
    return visitedArr;
  };
  
  depthFirstTraversal(startVertex) {
    if (!startVertex) { throw new Error('Error: no start vertex provided') }
    if (!this.vertices[startVertex]) { throw new Error('Error: vertex not in graph') }

    let traversalStack = [startVertex];
    let visitedArr = [startVertex];
    let currUnvisitedChild = false;
    let _peak = (array) => {
      return array[array.length - 1];
    }


    while (traversalStack.length) {
      currUnvisitedChild = false;
      let top = _peak(traversalStack);

      if (!visitedArr.includes(top)){
        visitedArr.push(top);
      }

      this.vertices[top].forEach( neighbor => {
        if (!visitedArr.includes(neighbor)){
          currUnvisitedChild = true;
          traversalStack.push(neighbor);
        }
      })

      if (currUnvisitedChild === false){
        traversalStack.pop();
      }
    }

    return visitedArr;
  };
};

module.exports = Graph;