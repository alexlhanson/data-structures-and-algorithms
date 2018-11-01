'use strict';

const LinkedList = require('../../linked_list/lib/linked_list');

/********************************************************************************
*         stack data structure module                                           *
********************************************************************************/

class Stack {

  constructor(){
    this.storage = new LinkedList();
    this.size = 0
  }

  push(item){
    if(item === undefined) {throw new Error('Error: push of undefined not accepted');}
    this.storage.prepend(item);
    this.size++;
  }

  pop(){
    let data = this.storage.remove(0);
    this.size--;
    return data;
  }

  peek(){
    if(!this.storage.head){ return null}
    else { return this.storage.head.value };
  }

  serialize(){
    return this.storage.serialize();
  }

  static deserialize(serializedStack){
    let list = LinkedList.deserialize(serializedStack);
    let newStack = new Stack();
    newStack.storage = list;
    return newStack;
  }

};

module.exports = Stack;

