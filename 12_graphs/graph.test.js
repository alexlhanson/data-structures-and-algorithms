'use strict';

const Graph = require('./graph');

describe('graph constructor', () => {

  test('graph instance is an object', () => {
    let myGraph = new Graph();
    expect(typeof myGraph).toBe('object');
  })

  test('graph instance has vertices object in it', () => {
    let myGraph = new Graph();
    expect(typeof myGraph.vertices).toBe('object');
  })
});

describe('graph add method', () => {

  test('should show add vertex method adds a new vertex to vertices', () => {
    let myGraph = new Graph();
    let neighborsArr = ['b', 'c'];
    myGraph.add('a', neighborsArr);

    expect(myGraph.vertices['a']).toEqual(neighborsArr);
  })

  test('should show add vertex method adds multiple vertices', () => {
    let myGraph = new Graph();
    let neighborsArr = ['b', 'c'];
    myGraph.add('a', neighborsArr);
    myGraph.add('c', ['a']);

    expect(myGraph.vertices['c']).toEqual(['a']);
  })

  test('should show that a vertex added without neighbors', () => {
    let myGraph = new Graph();
    myGraph.add('a', []);
    expect(myGraph.vertices['a']).toEqual([]);
  })

  test('should show that a vertex added without neighbors array throws error', () => {
    let myGraph = new Graph();
    expect(() => { myGraph.add('a') }).toThrow('Error: no neighbors array provided');
  })

  test('should show that a vertex added without value throws error', () => {
    let myGraph = new Graph();
    expect(() => { myGraph.add() }).toThrow('Error: no vertex value provided');
  })

});

describe('breadth first traversal', () => {

  test('should show an array gets returned', () => {
    let myGraph = new Graph();    
    myGraph.vertices = {
      ['a']: ['b', 'c', 'e'],
      ['b']: ['a', 'c'],
      ['c']: ['a', 'b', 'd'],
      ['d']: ['c', 'e'],
      ['e']: ['a', 'd'],
    };
    let startVertex = 'a';
    let actual = myGraph.breadthFirstTraversal('a');

    expect(actual).toEqual(['a', 'b', 'c', 'e', 'd']);
  });

  test('shows that no start vertex throws an error', () => {
    let myGraph = new Graph();    

    expect(() => myGraph.breadthFirstTraversal()).toThrow('Error: no start vertex provided');
  });

  test('shows that no start vertex throws an error', () => {
    let myGraph = new Graph();    
    myGraph.vertices = {
      ['a']: ['b', 'c', 'e'],
      ['b']: ['a', 'c'],
      ['c']: ['a', 'b', 'd'],
      ['d']: ['c', 'e'],
      ['e']: ['a', 'd'],
    };
    expect(() => myGraph.breadthFirstTraversal('f')).toThrow('Error: vertex not in graph');
  });
});