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

  test('Adding a node adds to root', () => {
    let testTree = new Tree(new TreeNode(5));
    expect(testTree.root.value).toBe(5);
  });

  test('Adding 4 nodes adds to root children properly', () => {
    let testTree = new Tree(new TreeNode(3));
    testTree.insert(new TreeNode(5));
    testTree.insert(new TreeNode(4));
    testTree.insert(new TreeNode(7));
    expect(testTree.root.right.left.value).toBe(4);
    expect(testTree.root.right.right.value).toBe(7);
  });

  test('insert method only works with numbers', () => {
    expect(() => {
      let testTree = new Tree(new TreeNode(5));
      testTree.insert(new TreeNode('asdf'));
      console.log(testTree);
    }).toThrow('insert method only works with numbers');
  });

  test('insert method does not work with repeated values', () => {
    expect(() => {
      let testTree = new Tree(new TreeNode(3));
      testTree.insert(new TreeNode(3));
      console.log(testTree);
    }).toThrow(`Cannot insert a value that already exists`);
  });

});

/********************************************************************************
*         Find Method                                                           *
********************************************************************************/

describe('find method', () => {

  let testTree = new Tree(new TreeNode(5));
  let node3 = new TreeNode(3);
  let node7 = new TreeNode(7);

  test('that find method returns root node from BST with 1 node', () => {
    let actual = testTree.find(5);
    expect(actual.value).toBe(5);
  })

  test('that find method returns a node from BST with 3 nodes', () => {
    testTree.root.right = node7;
    testTree.root.left = node3;
    let actual = testTree.find(3);
    expect(actual.value).toBe(3);
    expect(actual.right).toBe(null);

  })
});

/********************************************************************************
*         Remove Method                                                           *
********************************************************************************/

// describe('remove method', () => {
//   let testTree = new Tree(new TreeNode(5));
//   let node3 = new TreeNode(3);
//   let node7 = new TreeNode(7);
//   let node6 = new TreeNode(6);
//   let node4 = new TreeNode(4);


//   test('that remove method returns root node from BST with 1 node', () => {
//     let removalNode = testTree.find(5);
//     console.log(removalNode);
//     let actual = testTree.remove(removalNode);
//     expect(actual.value).toBe(5);
//     expect(testTree.root).toBe(null);
//   });

// test('that remove method with long left side removes value and retains tree structure', () => {
//   let testTree2 = new Tree(node7);//7
//   testTree2.root.left = node4;//4
//   testTree2.root.left.right = node6;//6
//   testTree2.root.left.right.left = node5;//5
//   let removalNode = testTree2.find(7);
//   let actual = testTree.remove(removalNode);
//   expect(actual.value).toBe(7);
//   expect(testTree.root.value).toBe(4);
//   expect(testTree.root.right.left.value).toBe(5);
// });

// test('that with long right side removes value and retains tree structure', () => {

//   let testTree3 = new Tree(node3);//3
//   testTree3.root.right = node4;
//   testTree3.root.right.right = node6;
//   testTree3.root.right.left = node5;

//   testTree2.insert(node4);//4
//   testTree2.insert(node6);//6
//   testTree2.insert(node5);//5
//   let actual = testTree2.remove(4);
//   expect(actual.value).toBe(4);
//   expect(testTree2.root.value).toBe(3);
//   expect(testTree2.root.right.value).toBe(6);
// });

// });

/********************************************************************************
*        breadth first traversal                                                *
********************************************************************************/

describe('breadth first traversal', () => {

  test('should show it goes breadth first', () => {
    let testTree = new Tree(new TreeNode(10));
    testTree.root.left = new TreeNode(5);
    testTree.root.left.left = new TreeNode(1);
    testTree.root.right = new TreeNode(15);
    testTree.root.right.right = new TreeNode(20);
    let actual = testTree.breadthFirst();

    expect(actual).toEqual([10, 5, 15, 1, 20]);
  })
});

/********************************************************************************
*         serialize and deserialize                                             *
********************************************************************************/

describe('serialize and deserialize tests', () => {

  test('should show serialize causes tree to be turned into a buffer', () => {
    let testTree = new Tree(new TreeNode(10));
    let actual = testTree.serialize();
    expect(actual).toBeInstanceOf(Buffer);

  })

  test('should show root value in a deserialized serialized list to be the same as before', () => {
    let testTree = new Tree(new TreeNode(10));    
    let serTree = testTree.serialize();
    let deserialTree = Tree.deserialize(serTree);
    expect(deserialTree.root.value).toBe(10);
  })

  test('should show that deserialized tree still has Tree class methods', () => {
    let testTree = new Tree(new TreeNode(10));    
    let serTree = testTree.serialize();
    let deserialTree = Tree.deserialize(serTree);
    let actual = deserialTree.find(10); 
    expect(actual.value).toBe(10);
  })
});