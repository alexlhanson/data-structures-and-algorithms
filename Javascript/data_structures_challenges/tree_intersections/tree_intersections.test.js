'use strict';

const treeIntersection = require('./tree_intersections');
const BinaryTree = require('../../data_structures/binary_search_tree/lib/trees');
const TreeNode = require('../../data_structures/binary_search_tree/lib/tree-node');


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

    expect(actual).toEqual([1, 5])

  })

  test('that tree without intersections returns empty array', () => {

    let myTreeA = new BinaryTree(new TreeNode(5));
    myTreeA.insert(new TreeNode(10));
    myTreeA.insert(new TreeNode(20));
    myTreeA.insert(new TreeNode(2));

    let myTreeB = new BinaryTree(new TreeNode(9));
    myTreeB.insert(new TreeNode(4));
    myTreeB.insert(new TreeNode(3));
    myTreeB.insert(new TreeNode(1));


    let actual = treeIntersection(myTreeA, myTreeB);

    expect(actual).toEqual([])

  })

  test('should show passing in one tree throws error', () => {

    let myTreeA = new BinaryTree(new TreeNode(5));
    expect(() => treeIntersection(myTreeA)).toThrow('Error: intersection requires two trees');

  })
});