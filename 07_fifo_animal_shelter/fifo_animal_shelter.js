'use strict';

const Queue = require('../05_stacks_queues/lib/queue');

class AnimalShelter extends Queue {
  constructor() {
    super();
  }

  enqueue(item) {
    if (item !== 'cat' && item !== 'dog') {
      throw new Error('Animal shelter only accepts cat and dog animals');
    }
    super.enqueue(item);
  };

  dequeue(pref) {
    if (pref === 'cat' || pref === 'dog') {
      this.storage.current = this.storage.head;
      this.storage.next = this.storage.current.next;

      //check if the preference is at the front of the queue
      if (this.storage.head.value === pref) {
        let returnAnimal = this.storage.current;
        this.storage.head = this.storage.next;
        return returnAnimal;
      }
      //traverse while current is not the preference and the next is still a value
      while (this.storage.current.value !== pref && this.storage.next.value) {
        this.storage.previous = this.storage.current;
        this.storage.current = this.storage.next;
        this.storage.next = this.storage.current.next;
      }
      //if the current value is preference, but the next value is not null
      if (this.storage.current.value === pref && this.storage.next !== null) {
        let returnAnimal = this.storage.current;
        this.storage.previous.next = this.storage.current.next;
        this.storage.current.next = null;
        return returnAnimal;
      }
      //if current value is preference, but next value is null
      else if (this.storage.current.value === pref && this.storage.next === null) {
        let returnAnimal = this.storage.current;
        this.storage.previous.next = null
        return returnAnimal;
      } else { throw new Error(`No ${pref} is available at this time`) }
    }
    //if preference isn't cat or dog give them the first at the queue as if no preference
    return super.dequeue();
  }
}

module.exports = AnimalShelter;