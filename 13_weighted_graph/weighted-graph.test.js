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

    expect(myGraph.adjList.get('Pandora').has('Narnia')).toBeDefined();
    expect(myGraph.adjList.get('Narnia').has('Pandora')).toBeDefined();

  })

  test('should show that weight is successfully added to both edges', () => {
    let myGraph = new WeightedGraph();

    myGraph.addVertex('Pandora');
    myGraph.addVertex('Narnia');
    myGraph.addEdge('Pandora', 'Narnia', 42);

    expect(myGraph.adjList.get('Pandora').get('Narnia')).toBe(42);
    expect(myGraph.adjList.get('Narnia').get('Pandora')).toBe(42);

  })

  test('should show that error is thrown if parameters not included', () => {
    let myGraph = new WeightedGraph();

    myGraph.addVertex('Pandora');
    myGraph.addVertex('Narnia');

    expect(() => { myGraph.addEdge() }).toThrow('Error: no vertices included');

  });

  test('should show that weight is set to 1 if no weight provided', () => {
    let myGraph = new WeightedGraph();

    myGraph.addVertex('Pandora');
    myGraph.addVertex('Narnia');
    myGraph.addEdge('Pandora', 'Narnia');

    expect(myGraph.adjList.get('Pandora').get('Narnia')).toBe(1);
    expect(myGraph.adjList.get('Narnia').get('Pandora')).toBe(1);

  });
});

describe('has edge method', () => {

  test('should show that edge exists by returning weight', () => {
    let myGraph = new WeightedGraph();

    myGraph.addVertex('Pandora');
    myGraph.addVertex('Narnia');
    myGraph.addEdge('Pandora', 'Narnia', 42);

    expect(myGraph.hasEdge('Pandora', 'Narnia')).toBe(42);
  });

  test('should show that error is thrown if parameters not included', () => {
    let myGraph = new WeightedGraph();

    myGraph.addVertex('Pandora');
    myGraph.addVertex('Narnia');

    expect(() => { myGraph.hasEdge() }).toThrow('Error: no vertices included');

  });

  test('should show that undefined is returned if no edge', () => {
    let myGraph = new WeightedGraph();

    myGraph.addVertex('Pandora');
    myGraph.addVertex('Narnia');

    expect(myGraph.hasEdge('Pandora', 'Smurfville')).toBeUndefined;
  });

});

describe('has path method', () => {

  test('should return the total weight of path for valid path', () => {
    let myGraph = new WeightedGraph();

    myGraph.addVertex('Pandora');
    myGraph.addVertex('Narnia');
    myGraph.addVertex('Smurfville');
    myGraph.addEdge('Pandora', 'Narnia', 42);
    myGraph.addEdge('Pandora', 'Smurfville', 2);

    expect(myGraph.hasPath(['Smurfville', 'Pandora', 'Narnia'])).toEqual([true, 44]);

  })
});