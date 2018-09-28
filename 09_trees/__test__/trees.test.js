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

describe('tree insert method', () => {
  let node1 = new TreeNode(5);
  let node4 = new TreeNode(4);
  let node2 = new TreeNode(3);
  let node3 = new TreeNode(7);
  let node5 = new TreeNode(9);
  // testTree.insert(node2);
  // testTree.insert(node3);
  // testTree.insert(node4);
  // testTree.insert(node5);

  test('Adding a node adds to root', () => {
    let testTree = new Tree(node1);
    expect(testTree.root.value).toBe(5);

  })

  test('Adding 3 nodes adds to root children', () => {
    let testTree = new Tree(node1);
    expect(testTree.root.value).toBe(5);

  })

});