'use strict';

const treeIntersection = require('./tree_intersections');
const BinaryTree = require('../../09_trees/lib/trees');
const TreeNode = require('../../09_trees/lib/tree-node');


describe(' tree interseciton function', () => {

  test('that tree intersections finds all intersections', () => {

    let myTreeA = new BinaryTree(new TreeNode(5));
    myTreeA.insert(new TreeNode(10));
    myTreeA.insert(new TreeNode(20));
    myTreeA.insert(new TreeNode(1));

    let myTreeB = new BinaryTree(new TreeNode(5));
    myTreeB.insert(new TreeNode(4));
    myTreeB.insert(new TreeNode(3));
    myTreeB.insert(new TreeNode(1));

    let actual = treeIntersection(myTreeA, myTreeB);

    expect(actual).toEqual([5, 1])

  })
});