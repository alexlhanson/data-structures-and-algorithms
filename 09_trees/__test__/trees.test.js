'use strict';

const Tree = require('../lib/trees');
const TreeNode = require('../lib/tree-node');

describe('tree constructor', () => {

  test('tree constructor returns object', () => {
    let actual = new Tree();

    expect(typeof actual).toBe('object');
  })

  test('tree constructor returns object with root and value', () => {
    let node = new TreeNode(5);
    let actual = new Tree(node);

    expect(actual.root.value).toBe(5);
  })
});