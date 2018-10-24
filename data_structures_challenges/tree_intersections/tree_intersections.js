'use strict';

const BinaryTree = require('../../09_trees/lib/trees');

const treeIntersection = (tree1, tree2) => {

  let results = [];
  let traversalCollection = {};
  let traversalCb = (node) => {
    traversalCollection[node.value] = node.value;
  };
  let intersectionCb = (node) => {
    if (traversalCollection[node.value]){
      results.push(node.value);
    }
  }

  tree1._traverseCb(this.root, traversalCb);
  tree2._traverseCb(this.root, intersectionCb);

  return results;
};

module.exports = treeIntersection;