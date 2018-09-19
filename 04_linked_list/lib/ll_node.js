'use strict';

class Node{
  constructor(value, next){
    if (value === undefined){throw new Error('Error: Node Constructor requires <value> to instantiate')};

    this.value = value,
    this.next = next || null;

  };
};

module.exports = Node;