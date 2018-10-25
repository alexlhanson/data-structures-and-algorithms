'use strict';

const BinaryTree = require('../../09_trees/lib/trees');

const treeIntersection = (tree1, tree2) => {
  if (!tree1 || !tree2){throw new Error('Error: intersection requires two trees')}
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

  tree1.traverseCb(tree1.root, traversalCb);
  tree2.traverseCb(tree2.root, intersectionCb);

  return results;
};

module.exports = treeIntersection;