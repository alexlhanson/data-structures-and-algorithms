'use strict';

const Node = require('./ll_node');
/********************************************************************************
*         LINKED LIST MODULE                                                    *
********************************************************************************/
class LinkedList{
  constructor(){
    this.length = 1;
    this.head = null;
    this.current = null;
    this.tail = null;
  }

  // append method
  append(value){
    if (!this.head){
      this.head = new Node (value);
      this.tail = this.head;
    };
    this.current = new Node(value);
    this.tail.next = this.current;
    this.tail = this.current;
  } 

};

module.exports = LinkedList;