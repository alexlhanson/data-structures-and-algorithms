'use strict';

const Node = require('./ll_node');

class LinkedList{
  constructor(){
    this.length = 1;
    this.head = null;
    this.current = null;
    this.tail = null;
  }
};

module.exports = LinkedList;