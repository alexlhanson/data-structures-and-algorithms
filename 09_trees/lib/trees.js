'use strict';

const TreeNode = require('../lib/tree-node');
const Queue = require('../../05_stacks_queues/lib/queue');

class Tree {

  constructor(node) {
    this.root = node;
  }

  /********************************************************************************
   *         BST  Methods                                                          *
   ********************************************************************************/
  insert(node) {
    if (typeof(node.value) !== "number") throw new Error('insert method only works with numbers');
    if (!this.root.value) {
      return this.root.value = node.value
    };

    let _walk = (childNode) => {
      if (node.value < childNode.value) {
        if (childNode.left === null) {
          childNode.left = node;
          return;
        } else { _walk(childNode.left) }
      } else if (node.value > childNode.value) {
        if (childNode.right === null) {
          childNode.right = node;
          return;
        } else { _walk(childNode.right) }
      } else {
        throw new Error(`Cannot insert a value that already exists`);
      }
    }

    _walk(this.root)
  };

  //find node method
  find(value) {
    let returnNode;

    let _walk = node => {
      if (value === node.value) {
        returnNode = node;
        return;
      }
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }

    _walk(this.root)
    return returnNode;
  }

  //remove node method
  remove(node) {
    let result = new TreeNode(node.value);

    let _removeNode = (node) => {

      if (node.left === null) {
        if (node.right === null) {
          //return a node that is a leaf
          if (node === this.root){
            this.root === null;
          } else {node = null};
          return;
        } else {
          // return a node with one child on right
          node = node.right;
          return;
        }
      } else if (node.right === null) {
        // return with one child on left
        node = node.left;
        return;
      } else {
        //return with two children
        nodeToSwap = _getMaxNode(node.left);
        node.value = nodeToSwap.value;
        if (nodeToSwap.left) {
          nodeToSwap = nodeToSwap.left;
        } else {
          nodeToSwap = null;
        }
      }
    }
    //starts removal
    _removeNode(this.root);

    return result;

  };
  //serialize method
  serialize() {
  }

  //deserialize method
  static deserialize(serializedTree) {
    let treeArr = this.preOrder();
    let buffArr = Buffer.from(Array)
  }

  /********************************************************************************
   *         Helpers                                                               *
  ********************************************************************************/
  _getMinNode(node) {
    if (!node) {
      node = this.root
    }
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  _getMaxNode(node) {
    if (!node) {
      node = this.root
    }
    while (node.right) {
      node = node.right;
    }
    if (node.left)
      return node;
  }

  /********************************************************************************
   *       Tree to Array and Traversal Patterns                                   *
   ********************************************************************************/
  //Create array from walk order root - left - right
  preOrder() {

    let resultsArr = [];

    let _walk = node => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }

    _walk(this.root);

    return resultsArr
  }
  //Create array from walk order left - right - root
  postOrder() {

    let resultsArr = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    }

    _walk(this.root);

    return resultsArr
  }

  //Create array from walk order left - root - right
  inOrder() {

    let resultsArr = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    }

    _walk(this.root);

    return resultsArr
  };
  //console logs the values of each node in breadth first fashion  
  breadthFirst() {
    let resultsArr = [];
    let breadthQueue = new Queue();

    breadthQueue.enqueue(this.root);
    let deQ = breadthQueue.dequeue();

    resultsArr.push(deQ.value.value);
    if (deQ.value.left) { breadthQueue.enqueue(deQ.value.left) }
    if (deQ.value.right) { breadthQueue.enqueue(deQ.value.right) }
    while (breadthQueue.size) {
      deQ = breadthQueue.dequeue();
      resultsArr.push(deQ.value.value);
      if (deQ.value.left) { breadthQueue.enqueue(deQ.value.left) }
      if (deQ.value.right) { breadthQueue.enqueue(deQ.value.right) }
    };
  };

};

module.exports = Tree;