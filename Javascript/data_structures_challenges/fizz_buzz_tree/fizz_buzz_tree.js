'use strict';

const Tree = require('../../data_structures/binary_search_tree/lib/trees');
const TreeNode = require('../../data_structures/binary_search_tree/lib/tree-node');

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