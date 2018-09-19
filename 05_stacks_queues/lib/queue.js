'use strict';

const LinkedList = require('../../04_linked_list/lib/linked_list');

/********************************************************************************
*         queue data structure module                                           *
********************************************************************************/

class Queue {
  constructor(){
    this.storage = new LinkedList();
  }

  enqueue(item){
    if(item === undefined) {throw new Error('Error: enqueue of undefined not accepted');}
    this.storage.prepend(item);
  }

  dequeue(){
    let data = this.storage.remove(this.length - 1);
    return data;
  }

  peek(){
    return this.storage.tail.value;
  }

  serialize(){
    return this.storage.serialize();
  }

  static deserialize(serializedQueue){
    let list = LinkedList.deserialize(serializedQueue);
    let newQueue = new Queue();
    newQueue.storage = list;
    return newQueue;
  }

};

module.exports = Queue;