'use strict';

const Node = require('./ll_node');
const fs = require('fs');
/********************************************************************************
*         LINKED LIST MODULE                                                    *
********************************************************************************/
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // append method - BigO = O(1)
  append(value) {
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else if(!this.head){
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
    this.length++;
  }

  //prepend method - BigO = O(1)
  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    };
    let current = new Node(value);
    current.next = this.head;
    this.head = current;
    this.length++
  }

  //reverse method - BigO = O(n)
  reverse() {
    let current = this.head;
    let prev = null;
    let next = current.next;

    while (next) {
      current.next = prev;
      prev = current;
      current = next;
      next = current.next;
    };
    current.next = prev;
    this.tail = this.head;
    this.head = current;
  }

  //remove method  - BigO = O(n)
  remove(offset) {
    if (!this.length) return;
    let current = this.head;
    let prev = null;
    let next = current.next;
    let data = null;
    if (offset > 0) {
      for (let i = 0; i < offset; i++) {
        prev = current;
        current = current.next;
        next = current.next;
      }
      prev.next = next;
      data = current;
      current.next = null;
    } else {
      next = current.next;
      this.head = next;
      data = current;
      current.next = null;
    }
    this.length--
    return data
  }

  //insert before method

  insertBefore(refVal, newVal) {
    if (refVal === 0) {
      this.prepend(newVal);
    }
    this.current = this.head;
    this.next = this.current.next;
    while (refVal !== this.current.value && this.current !== this.tail) {
      this.prev = this.current;
      this.current = this.next;
      this.next = this.current.next;
    };
    if (refVal !== this.current.value) {
      throw new Error('Value not found in list');
    }
    let newNode = new Node(newVal);
    newNode.next = this.current;
    this.prev.next = newNode;
    this.length++;
  }

  //insert after method

  insertAfter(refVal, newVal) {
    let current = this.head;

    while (refVal !== current.value && current !== this.tail) {
      current = current.next;
    };
    if (refVal !== current.value && current === this.tail) {
      throw new Error('Value not found in list');
    }
    let newNode = new Node(newVal);
    newNode.next = current.next;
    current.next = newNode;
    this.length++
  }

  //k from end method

  kFromEnd(number) {
    if(this.head === null){
      throw new Error('list is empty')     
    }
    if (number > this.length - 1) {
      throw new Error('number is out of range of list')
    };
    let current = this.head;
    for (let i = 0; i < this.length - 1 - number; i++){
      current = current.next;
    };
    return current.value;
  }

  //serialize method - turns Linked List into raw data -  - BigO = O(1)
  serialize() {
    let serializedList = JSON.stringify(this);
    return serializedList = Buffer.alloc(serializedList.length, serializedList);
  }

  //de-serialize method - turns serialized linked list back into linked list  - BigO = O(1)
  static deserialize(serializedList) {
    let deserializedList = serializedList.toString();
    deserializedList = JSON.parse(deserializedList);
    let newLinkedList = new LinkedList();
    newLinkedList.length = deserializedList.length;
    newLinkedList.head = deserializedList.head;
    newLinkedList.tail = deserializedList.tail;
    return newLinkedList;
  }
  //mergeLists
  static mergeLists(listOne, listTwo){
    let startLength = listOne.length;
    let current = listOne.head;
    
    let i = 0;
    while (i < startLength && listTwo.head !== null){
      listOne.insertAfter(current.value, listTwo.head.value);
      listTwo.head = listTwo.head.next;
      current = current.next.next;
      i++;
    }
    if (listTwo.head){
      listOne.tail = listTwo.head;
    }
    return listOne.head;
  }
};

module.exports = LinkedList;