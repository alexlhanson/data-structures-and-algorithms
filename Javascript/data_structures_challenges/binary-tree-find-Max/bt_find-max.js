'use strict';

const Tree = require('../../data_structures/binary_search_tree/lib/trees');
const Node = require('../../data_structures/binary_search_tree/lib/tree-node');

let bTFindMax = (Tree) => {

  let maxVal = Tree.root.value;
  
  let _walk = (node) => {
    if (node.value > maxVal) {
      maxVal = node.value;
    }
    if (node.left){_walk(node.left);}
    if (node.right){_walk(node.right);}
  }
  _walk(Tree.root);
  return maxVal;

};

module.exports = bTFindMax;

