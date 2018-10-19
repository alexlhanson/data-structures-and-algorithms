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
    this.adjList.get(source).set(dest, weight);
    this.adjList.get(dest).set(source, weight);
  }



}



module.exports = WeightedGraph;