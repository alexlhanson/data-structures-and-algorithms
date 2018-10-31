'use strict';

class WeightedGraph{
  constructor(){
    this.adjList = new Map(); 
  }

  addVertex(data){
    if(!data){throw new Error('Error: no vertex parameter included')}
    this.adjList.set(data, new Map());
  }

  addEdge(source, dest, weight){
    if(!source || !dest){throw new Error('Error: no vertices included')}
    if(!weight){weight = 1};

    this.adjList.get(source).set(dest, weight);
    this.adjList.get(dest).set(source, weight);
  }

  hasEdge(source, dest){
    if(!source || !dest){throw new Error('Error: no vertices included')}

    if(this.adjList.has(source) && this.adjList.get(source).has(dest)){
      return this.adjList.get(source).get(dest);
    }
  }

  hasPath(pathArr){
    let totalWeight = 0;
    let pathFound = true;
    
    pathFound = pathArr.every((vertex, index, array) => {
      if(array[index + 1]){
        if(this.hasEdge(vertex, array[index + 1])){
          totalWeight += this.hasEdge(vertex, array[index + 1]);
          return true
        } else {
          totalWeight = 0;
          return false;
        }
      }
      return true;
    });
    
    return [pathFound, totalWeight]
  }

}



module.exports = WeightedGraph;