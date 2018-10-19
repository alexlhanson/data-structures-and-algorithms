'use strict';

const LinkedList = require('../04_linked_list/lib/linked_list');

class HashTable {
  constructor(nBuckets){
    if (!nBuckets){throw new Error('No buckets number specified')}
    this.nBuckets = nBuckets;
    this.buckets = Array(nBuckets).fill(null);
  }

  multHash(key){
    if (!key){throw new Error('no key provided for hashing')}

    return key.split('').reduce((acc, curr) => {
      return acc * curr.charCodeAt(0);
    }, 1) % this.nBuckets;
  }
  
  set(key, value){
    if (arguments.length < 2){throw new Error('set requires key and value')}
    let hashedVal = this.multHash(key);

    if (!this.buckets[hashedVal]){
      let bucketLL = new LinkedList()
      bucketLL.append({[key]: value})
  
      this.buckets[hashedVal] = bucketLL;
    } else {
      this.buckets[hashedVal].append({[key]: value});
    }
  }

  get(key){
    if (!key){throw new Error('no key provided for hashing')}
    let hashedVal = this.multHash(key);
    let bucketLL = this.buckets[hashedVal];
    //has a O(1) for append so overall is still O(n) to remove and append order won't matter in hash table
    let result = bucketLL.remove(key);
    bucketLL.append(result);

    return result.value[key];
  }


  remove(key){

  }

  serialize(){

  }

  deserialize(){

  }
}

module.exports = HashTable;