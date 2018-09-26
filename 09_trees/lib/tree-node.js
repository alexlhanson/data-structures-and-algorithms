'use strict';

class TreeNode{

  constructor(value){
    if (value === null || value === undefined){
      throw new Error('Error: cannot enter value of null or undefined');
    }
    this.value = value;
    this.left = null;
    this.right = null;
  };
};

module.exports = TreeNode;