'use strict';

const TreeNode = require('../lib/tree-node');

class Tree{

  constructor(node){
    this.root = node;
  }

  /********************************************************************************
  *         Tree to Array and Traversal Patterns                                  *
  ********************************************************************************/
  //Create array from walk order root - left - right
  preOrder(){
    
    let resultsArr = [];
  
    let _walk = node => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.left) _walk(node.left);
    }

    _walk(this.root);

    return resultsArr
  }
  //Create array from walk order left - right - root
  postOrder(){
    
    let resultsArr = [];
  
    let _walk = node => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.left) _walk(node.left);
    }

    _walk(this.root);

    return resultsArr
  }

  //Create array from walk order left - root - right
  inOrder(){
    
    let resultsArr = [];
  
    let _walk = node => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.left) _walk(node.left);
    }

    _walk(this.root);

    return resultsArr
  }

  /********************************************************************************
  *         BST  Methods                                                          *
  ********************************************************************************/
  //insert node method
  insert(node){}

  //remove node method
  remove(node){}

  //find node method
  find(node){}

  //serialize method
  serialize(){}

  //deserialize method
  static deserialize(Tree){}

}

module.exports = Tree;
