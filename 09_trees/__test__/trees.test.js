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

/********************************************************************************
*         Insert method                                                         *
********************************************************************************/

describe('tree insert method', () => {
  let node1 = new TreeNode(5);
  let node2 = new TreeNode(3);
  let node3 = new TreeNode(7);
  let node4 = new TreeNode('asdf');
  let node5 = new TreeNode(4);

  test('Adding a node adds to root', () => {
    let testTree = new Tree(node1);
    expect(testTree.root.value).toBe(5);
  });

  test('Adding 4 nodes adds to root children properly', () => {
    let testTree = new Tree(node2);
    testTree.insert(node1);
    testTree.insert(node3);
    testTree.insert(node5);
    expect(testTree.root.right.left.value).toBe(4);
    expect(testTree.root.right.right.value).toBe(7);
  });

  test('insert method only works with numbers', () => {
    let testTree = new Tree();
    expect(() => {
      testTree.insert(node4)
    }).toThrow('BST only accepts numbers');
  });

  test('insert method does not work with repeated values', () => {
    expect(() => {
      let testTree = new Tree(node3);
      testTree.insert(node3)
      console.log(testTree);
    }).toThrow(`Cannot insert ${node3.value}, already exists`);
  });

});

/********************************************************************************
*         Find Method                                                           *
********************************************************************************/

describe('find method', () => {

  let node5 = new TreeNode(5);
  let node3 = new TreeNode(3);
  let node7 = new TreeNode(7);

  test('that find method returns root node from BST with 1 node', () => {
    let testTree = new Tree(node5);
    let actual = testTree.find(5);
    expect(actual.value).toBe(5);
  })

  test('that find method returns a node from BST with 3 nodes', () => {
    let testTree = new Tree(node5);
    testTree.insert(node3);
    testTree.insert(node7);
    let actual = testTree.find(5);
    expect(actual.value).toBe(5);
  })
});

/********************************************************************************
*         Remove Method                                                           *
********************************************************************************/

describe('remove method', () => {

  let node5 = new TreeNode(5);
  let node3 = new TreeNode(3);
  let node7 = new TreeNode(7);
  let node6 = new TreeNode(6);
  let node4 = new TreeNode(4);


  test('that remove method returns root node from BST with 1 node', () => {
    let testTree = new Tree(node5);
    let actual = testTree.remove(5)
    expect(actual.value).toBe(5);
  });

  test('that remove method with long left side removes value and retains tree structure', () => {
    let testTree = new Tree(node7);//7
    testTree.insert(node4);//4
    testTree.insert(node6);//6
    testTree.insert(node5);//5
    let actual = testTree.remove(7);
    expect(actual.value).toBe(7);
    expect(testTree.root.value).toBe(4);
    expect(testTree.root.right.left.value).toBe(5);
  });

  test('that with long right side removes value and retains tree structure', () => {
    node5 = new TreeNode(5);
    node3 = new TreeNode(3);
    node6 = new TreeNode(6);
    node4 = new TreeNode(4);
    
    let testTree2 = new Tree(node3);//3
    testTree2.insert(node4);//4
    testTree2.insert(node6);//6
    testTree2.insert(node5);//5
    let actual = testTree2.remove(4);
    expect(actual.value).toBe(4);
    expect(testTree2.root.value).toBe(3);
    expect(testTree2.root.right.value).toBe(6);
  });

});

/********************************************************************************
*        breadth first traversal                                                *
********************************************************************************/

describe('breadth first traversal', () => {

  test('should show it goes breadth first', () => {
    let node10 = new TreeNode(10);
    let node20 = new TreeNode(20);
    let node15 = new TreeNode(15);
    let node5 = new TreeNode(5);
    let node1 = new TreeNode(1);

    let testTree = new Tree(node10);
    testTree.insert(node1);
    testTree.insert(node15);
    testTree.insert(node20);
    testTree.insert(node5);
    testTree.breadthFirst();
  })
});

