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
    this.prev = null;
  }

  // append method
  append(value){
    if (!this.head){
      this.head = new Node (value);
      this.tail = this.head;
    } else {
    this.current = new Node(value);
    this.tail.next = this.current;
    this.tail = this.current;
    }
  } 

  //prepend method
  prepend(value){
    if (!this.head){
      this.head = new Node (value);
      this.tail = this.head;
    };
    this.current = new Node(value);
    this.current.next = this.head;
    this.head = this.current;
  }

  //reverse method - TODO GET OPERATIONAL
  reverse(){
    this.current = this.head;

    while (this.current.next != null){
      this.next = this.current.next;
      console.log(this);
      this.current.next = this.prev;
      this.prev = this.current;
      this.current = this.next;
    };
    console.log(this);
    this.head = this.tail;
    this.current = this.head;
  }

  //remove method
  remove(offset){

  }

  //serialize method - turns Linked List into raw data
  serialize(){

  }

  //de-serialize method - turns serialized linked list back into linked list
  deSerialize(){
    
  }
};

module.exports = LinkedList;