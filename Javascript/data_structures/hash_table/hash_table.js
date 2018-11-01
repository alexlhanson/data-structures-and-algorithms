'use strict';

const LinkedList = require('../linked_list/lib/linked_list');

class HashTable {
  constructor(nBuckets) {
    if (!nBuckets) { throw new Error('No buckets number specified') }
    this.nBuckets = nBuckets;
    this.buckets = Array(nBuckets).fill(null);
  }

  multHash(key) {
    if (!key) { throw new Error('no key provided for hashing') }

    return key.split('').reduce((acc, curr) => {
      return acc * curr.charCodeAt(0);
    }, 1) % this.nBuckets;
  }

  set(key, value) {
    if (arguments.length < 2) { throw new Error('set requires key and value') }
    let hashedVal = this.multHash(key);

    if (!this.buckets[hashedVal]) {
      let bucketLL = new LinkedList()
      bucketLL.append({ [key]: value })

      this.buckets[hashedVal] = bucketLL;
    } else {
      this.buckets[hashedVal].append({ [key]: value });
    }
  }

  get(key) {
    if (!key) { throw new Error('no key provided for get') }
    let hashedVal = this.multHash(key);
    let bucketLL = this.buckets[hashedVal];

    //has a O(1) for append so overall is still O(n) to remove and append order won't matter in hash table
    let result = HashTable._remove(key, bucketLL);
    if (!result) {return};
    bucketLL.append(result);
    return result[key];
  }

  remove(key) {
    if (!key) { throw new Error('no key provided for get') }

    let hashedVal = this.multHash(key);
    let bucketLL = this.buckets[hashedVal];
    let result = HashTable._remove(key, bucketLL);

    if(!result){return};
    return result[key];
  }

  serialize() {
    //serialize buckets first
    this.buckets.forEach(bucket => {
      if (bucket) {
        bucket = bucket.serialize();
      } else { bucket = null }
    });

    let serializedHashTable = JSON.stringify(this);
    return serializedHashTable = Buffer.alloc(serializedHashTable.length, serializedHashTable);

  }

  static deserialize(serializedHashTable) {
    let deserializedHashTable = serializedHashTable.toString();
    deserializedHashTable = JSON.parse(deserializedHashTable);

    deserializedHashTable.buckets.forEach((bucket, index) => {
      if (bucket) {
        let newLinkedList = new LinkedList();
        newLinkedList.length = bucket.length;
        newLinkedList.head = bucket.head;
        newLinkedList.tail = bucket.tail;
        deserializedHashTable.buckets[index] = newLinkedList;
      }
    })

    let newHashTable = new HashTable(deserializedHashTable.nBuckets);
    newHashTable.buckets = deserializedHashTable.buckets;

    return newHashTable;
  }

  static _remove(key, bucketLL) {
    if (!bucketLL || bucketLL.length === 0) {return};
    if (bucketLL.head.value[key]) {
      let result = bucketLL.head.value;
      bucketLL.head = bucketLL.head.next;
      bucketLL.length--;
      return result;
    }
    bucketLL.current = bucketLL.head;
    bucketLL.previous = bucketLL.head;
    bucketLL.next = bucketLL.current.next;
    while (!bucketLL.current.value[key] && bucketLL.current !== bucketLL.tail) {
      bucketLL.previous = bucketLL.current;
      if (bucketLL.current.next) {
        bucketLL.current = bucketLL.next;
        bucketLL.next = bucketLL.current.next;
      }
    }
    let result = bucketLL.current.value;
    bucketLL.previous.next = bucketLL.next;
    bucketLL.current.next = null;
    bucketLL.length--;

    return result;
  }
}

module.exports = HashTable;