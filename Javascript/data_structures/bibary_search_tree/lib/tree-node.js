'use strict';

class TreeNode{

  constructor(value, left, right){
    if (value === null || value === undefined){
      throw new Error('Error: cannot enter value of null or undefined');
    }
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  };
};

module.exports = TreeNode;