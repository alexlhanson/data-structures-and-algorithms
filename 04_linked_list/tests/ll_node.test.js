'use strict';

const Node = require('./../lib/ll_node.js');

describe('Linked-List constructor module', () => {

  /********************************************************************************
  *         linked-list class tests                                               *
  ********************************************************************************/

  test('should instantiate a linked-list with head value of null', () => {
    let actual = new Node('hi');
    let expected = 'hi';
    expect(actual.value).toBe(expected);
  });

  test('should show null for next when instantiated without next arg', () => {
    let actual = new Node('hi');
    expect(actual.next).toBeNull();
  });

  test('should show new Node without arg to throw err', () => {
    expect(() => {
      new Node();
    }).toThrow('Error: Node Constructor requires <value> to instantiate');
  });
});

