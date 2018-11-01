'use strict';

const Stack = require('../../data_structures/stacks_queues/lib/stack');

class Queue {
  constructor() {
    this.storage1 = new Stack();
    this.storage2 = new Stack();
    this.size = 0;
  }

  enqueue(item) {
    this.storage1.push(item);
    this.storage1.size++;
    this.size++;
  };

  dequeue() {
    if (this.storage2.size === 0) {
      if (this.storage1.size === 0) {
        return
      } else {
        while (this.storage1.size > 0) {
          let item = this.storage1.pop();
          this.storage1.size--;
          this.size--;
          this.storage2.push(item.value);
          this.storage2.size++;
          this.size++;
        }
      }
    }
    this.storage2.size--;
    this.size--;
    let returnItem = this.storage2.pop()
    return returnItem;
  };

};

module.exports = Queue;