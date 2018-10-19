'use strict';

class HashTable {
  constructor(nBuckets){
    if (!nBuckets){throw new Error('No buckets number specified')}
    this.buckets = Array(nBuckets).fill(null);
  }

  hash(key){

  }

  get(key){

  }

  set(key, value){

  }

  remove(key){

  }

  serialize(){

  }

  deserialize(){

  }
}

module.exports = HashTable;