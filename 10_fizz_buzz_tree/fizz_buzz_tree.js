'use strict';

const Tree = require('../09_trees/lib/trees');
const TreeNode = require('../09_trees/lib/tree-node');

let fizzBuzzTree = (binarySearchTree) => {
  
  let _walkAndTransform = (node) => {
    if (node.left){ _walkAndTransform(node.left)}
    if (node.value % 15 === 0){ node.value = 'fizzbuzz';}
    else if(node.value % 3 === 0) { node.value = 'fizz';}
    else if(node.value % 5 === 0) { node.value = 'buzz';}
    if (node.right){ _walkAndTransform(node.right);}
    }
  
  _walkAndTransform(binarySearchTree.root)
  return binarySearchTree
};

module.exports = fizzBuzzTree;