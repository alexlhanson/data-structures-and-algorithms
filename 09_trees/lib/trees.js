'use strict';

const TreeNode = require('../lib/tree-node');

class Tree {

  constructor(node) {
    this.root = node;
  }

  /********************************************************************************
  *         Tree to Array and Traversal Patterns                                  *
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
  }

  /********************************************************************************
  *         BST  Methods                                                          *
  ********************************************************************************/
  //insert node method
  insert(node) {
    if (!this.root.value) {
      return this.root.value = node.value
    };

    let _walk = (childNode) => {
      if (node.value < childNode.value) {
        if (childNode.left === null) {
          childNode.left = node;
          return;
        } else { _walk(childNode.left) }
      }
      if (node.value > childNode.value) {
        if (childNode.right === null) {
          childNode.right = node;
          return;
        } else { _walk(childNode.right) }
      }
    }

    _walk(this.root)
  };

  //remove node method
  remove(value) {
    let removalNode = find(value);
    let newRoot = _findMax(removalNode.left);
  }

  //find node method
  find(value) { 

    let _walk = node => {
      if (value === node.value){
        return node
      }
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }

    _walk(this.root)
    return node
  }

  //serialize method
  serialize() { }

  //deserialize method
  static deserialize(Tree) { }

  /********************************************************************************
  *         Helpers                                                               *
  ********************************************************************************/

  _findMaxLeaf(node){
    if (node.right === null) {
      return node.value;
    } else { this._findMax(node.right)}
    
  }

  _findMinLeaf(node){
    if (node.left === null) {
      return node.value;
    } else { this._findMax(node.left)}
    
  }

module.exports = Tree;
