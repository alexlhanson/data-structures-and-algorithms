'use strict';

const WeightedGraph = require('./weighted-graph');

describe('weighted graph constructor', () => {

  test('should show that weighted graph has vertices object and Edge array', () => {
    let myGraph = new WeightedGraph();

    expect(myGraph.adjList).toBeInstanceOf(Map);
  });
});

describe('addVertex method', () => {

  test('should show that vertex is added to adjacency list', () => {
    let myGraph = new WeightedGraph();

    myGraph.addVertex('pandora');

    expect(myGraph.adjList.get('pandora')).toBeDefined();
  });

  test('should show error when no vertex is passed into function', () => {
    let myGraph = new WeightedGraph();
    
    expect(() => {myGraph.addVertex()}).toThrow('Error: no vertex parameter included');
  })
});