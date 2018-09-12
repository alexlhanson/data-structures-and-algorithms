'use strict';

const Node = require('./ll_node');
const fs = require('fs');
/********************************************************************************
*         LINKED LIST MODULE                                                    *
********************************************************************************/
class LinkedList{
  constructor(){
    this.length = 1;
    this.head = null;
    this.current = null;
    this.tail = null;
    this.prev = null;
  }

  // append method - BigO = O(1)
  append(value){
    if (!this.tail){
      this.head = this.tail = new Node (value);
    } else {
    // this.current = new Node(value);
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    }
  } 

  //prepend method - BigO = O(1)
  prepend(value){
    if (!this.head){
      this.head = this.tail = new Node (value);
    };
    this.current = new Node(value);
    this.current.next = this.head;
    this.head = this.current;
  }

  //reverse method - BigO = O(n)
  reverse(){
    this.current = this.head;
    this.next = this.current.next;

    while (this.current.next != null){
      this.current.next = this.prev;
      this.prev = this.current;
      this.current = this.next;
      this.next = this.current.next;
    };
    this.current.next = this.prev;
    this.tail = this.head;
    this.head = this.current;
  }

  //remove method  - BigO = O(n)
  remove(offset){
    this.current = this.head;
    if (offset > 0) {
      for (let i = 0; i < offset; i++){
        this.prev = this.current;
        this.current = this.current.next;
        this.next = this.current.next;
      }
      this.prev.next = this.next;
      this.current.next = null;
    } else {
      this.next = this.current.next;
      this.head = this.next;
      this.current.next = null;
    }
  }

  //serialize method - turns Linked List into raw data -  - BigO = O(1)
  serialize(){
    let serializedList = JSON.stringify(this.head);
    return serializedList = Buffer.alloc(serializedList.length, serializedList);
  }

  //de-serialize method - turns serialized linked list back into linked list  - BigO = O(1)
  deSerialize(){
    // console.log(this);
    let deSerializedList = this.toString();
    return deSerializedList = JSON.parse(deSerializedList);
  }
};

module.exports = LinkedList;