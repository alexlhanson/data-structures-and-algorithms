'use strict'

const Tree = require('../09_trees/lib/trees');
const TreeNode = require('../09_trees/lib/tree-node');
const Fbz = require('../10_fizz_buzz_tree/fizz_buzz_tree')

describe('fizzbuzz tree', () => {

  test('fizzbuzz tree changes values in multiples of 3', () => {
    let node15 = new TreeNode(15);
    let node5 = new TreeNode(5);
    let node3 = new TreeNode(3);
    let node30 = new TreeNode(30);
    let node32 = new TreeNode(32);
    let testTree = new Tree(node15);
    testTree.insert(node5);
    testTree.insert(node3);
    testTree.insert(node30);
    testTree.insert(node32);
    let fizzed = Fbz(testTree)

    expect(fizzed.root.value).toBe('fizzbuzz');
    expect(fizzed.root.right.value).toBe('fizzbuzz');
    expect(fizzed.root.right.right.value).toBe(32);
    expect(fizzed.root.left.value).toBe('buzz');
    expect(fizzed.root.left.left.value).toBe('fizz');

  })
});
