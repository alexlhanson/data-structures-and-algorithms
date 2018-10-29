'use strict';

const Tree = require('../09_trees/lib/trees');
const Node = require('../09_trees/lib/tree-node');
const btFindMax = require('./bt_find-max.js')

describe('binary tree find max', () => {

  test('should show max val of tree with one node is root value', () => {
    let testTree = new Tree(new Node(5));
    let actual = btFindMax(testTree);

    expect(actual).toBe(5);
  });

  test('should show max val of tree with multiple nodes finds max', () => {
    let testTree = new Tree(new Node(5));
    testTree.root.right = new Node(8);
    testTree.root.right.left = new Node(3);
    testTree.root.right.right = new Node(19);
    testTree.root.left = new Node(4);
    testTree.root.left.right = new Node(56);

    let actual = btFindMax(testTree);

    expect(actual).toBe(56);
  });

  test('should show max val of tree with negative values and 0 finds max 0', () => {
    let testTree = new Tree(new Node(-5));
    testTree.root.right = new Node(-8);
    testTree.root.right.left = new Node(0);
    testTree.root.right.right = new Node(-19);
    testTree.root.left = new Node(-4);
    testTree.root.left.right = new Node(-56);

    let actual = btFindMax(testTree);

    expect(actual).toBe(0);
  });


});