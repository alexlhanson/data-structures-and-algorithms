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
    if (typeof node.value !== 'number') throw new Error('BST only accepts numbers')
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
        // throw new Error(`Cannot insert ${node.value}, already exists`);
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
      }
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }

    _walk(this.root)
    return returnNode;
  }

  //remove node method
  remove(value) {
    let returnNode = new TreeNode(0);
    
    let _removeNode = (node, value) => {
      //walking the tree to the value
      if (node === null) {
        return null
      } else if (node.value < value) {
        node.right = _removeNode(node.right);
        return node;
      } else if (node.value > value) {
        node.left = _removeNode(node.left);
        return node;
      } else {
        returnNode = node
        // found the value and starting the remove portion
        if (node.left === null){
          
          if (node.right === null){
            //return a node that is a leaf
            node = null;
            return node;
            
          } else {
            
            // return a node with one child on right
            node = node.right;
            return node;
          }
        } else if (node.right === null){
          // return with one child on left
          node = node.left;
          return node;
        } else {
          //return with two children
          node.value = _returnCentralMaxLeaf(node.left);
          return node;
        } 
      }

      //starts removal
    };
    this.root = _removeNode(this.root, value);
    return returnNode;
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
  _returnCentralMaxLeaf(node) {
    if (node.right === null) {
      if (node.left === null) {
        // if the node.left is leaf
        node = node.left;
        node.left = null;
        return node.value
      } else {
        //if the node.left has one child on left
        node = node.left;
        return node.value; 
      }
    } else {
      //if the node.left has one child on right
      this._returnCentralMaxleaf(node.right);
    }

  }

  _returnMinLeaf(node) {
    if (node.left === null) {
      if (node.right === null) {
        return node
      }
    }
    if (node.left.left === null) {
      if (node.right.left === null) {
        let returnNode = node.left;
        node.left = null;
        return returnNode;
      } else this.returnMinLeaf(node.right)

    } else { this._returnMaxleaf(node.left) }

  }

  /********************************************************************************
   *    Depth First Tree to Array and Traversal Patterns                           *
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


};

module.exports = Tree;