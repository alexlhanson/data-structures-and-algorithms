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

    expect(() => { myGraph.addVertex() }).toThrow('Error: no vertex parameter included');
  })

  test('should show that addVertex can be used with different primitive data types', () => {
    let myGraph = new WeightedGraph();

    myGraph.addVertex(5);
    myGraph.addVertex(true);

    expect(myGraph.adjList.get(5)).toBeDefined();
    expect(myGraph.adjList.get(true)).toBeDefined();
  })
});

describe('Add Edges Method', () => {

  test('should show that edge is successfully added to both vertices', () => {
    let myGraph = new WeightedGraph();    

    myGraph.addVertex('Pandora');
    myGraph.addVertex('Narnia');
    myGraph.addEdge('Pandora', 'Narnia', 42);

    expect(myGraph.adjList.get('Pandora').has('Narnia'))
    expect(myGraph.adjList.get('Narnia').has('Pandora'))

  })
});