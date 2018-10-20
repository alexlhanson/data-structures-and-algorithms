'use strict';

const HashTable = require('./hash_table');

describe('hash table constructor', () => {

  test('hash table constructor returns an array of buckets', () => {
    let myHashTable = new HashTable(5);

    expect(myHashTable.buckets).toBeInstanceOf(Array);
  })

  test('hash table constructor returns an array of buckets with expected length', () => {
    let myHashTable = new HashTable(5);

    expect(myHashTable.buckets.length).toBe(5);
  })

  test('hash table constructor throws error with no buckets number', () => {
    expect(() => { new HashTable() }).toThrow('No buckets number specified');
  })

});

describe('multHash method', () => {

  test('should show that passing a key into hashing function returns integer', () => {
    let myHashTable = new HashTable(5);
    let hashedVal = myHashTable.multHash('alex');

    expect(typeof hashedVal).toBe('number');
  })

  test('should show that passing a key into hashing function returns integer in bucket number range', () => {
    let myHashTable = new HashTable(5);
    let hashedVal = myHashTable.multHash('alex');

    expect(hashedVal).toBeLessThan(5);
  })

  test('should show that error is thrown when no key is passed in', () => {

    let myHashTable = new HashTable(5);

    expect(() => { myHashTable.multHash() }).toThrow('no key provided for hashing');
  })

});

describe('set method', () => {

  test('should show that set method adds value to bucket', () => {
    let myHashTable = new HashTable(5);
    let hashedVal = myHashTable.multHash('alex');

    myHashTable.set('alex', 15);
    let actual = myHashTable.buckets[hashedVal];

    expect(actual.head.value['alex']).toBe(15);
  })

  test('should show that set method adds value to tail of linkedlist if already filled bucket', () => {
    let myHashTable = new HashTable(5);
    let hashedVal = myHashTable.multHash('alex');

    myHashTable.set('alex', 15);
    myHashTable.set('d', 20);
    let actual = myHashTable.buckets[hashedVal];

    expect(actual.tail.value['d']).toBe(20);
  })

  test('should throw error if no key is provided', () => {
    let myHashTable = new HashTable(5);
    let hashedVal = myHashTable.multHash('alex');

    expect(() => { myHashTable.set('alex') }).toThrow('set requires key and value');
  })

});

describe('get method', () => {

  test('should show that get method grabs value from bucket', () => {
    let myHashTable = new HashTable(5);
    myHashTable.set('alex', 15);

    expect(myHashTable.get('alex')).toBe(15);
  })

  test('should show that get method grabs value from bucket', () => {
    let myHashTable = new HashTable(5);
    myHashTable.set('alex', 15);
    myHashTable.set('d', 120);

    expect(myHashTable.get('d')).toBe(120);
  })

  test('should show that get method grabs value from buck with multiple nodes', () => {
    let myHashTable = new HashTable(5);
    myHashTable.set('alex', 15);
    myHashTable.set('d', 20);
    myHashTable.set('i', 25);
    myHashTable.set('n', 30);

    expect(myHashTable.get('n')).toBe(30);
    expect(myHashTable.get('i')).toBe(25);

  });

  test('should throw error if no key is provided', () => {
    let myHashTable = new HashTable(5);

    expect(() => { myHashTable.get() }).toThrow('no key provided for get');
  });

  describe('remove method', () => {

    test('should return the value of key from hash table', () => {
    let myHashTable = new HashTable(5);
    myHashTable.set('alex', 15);
    let actual = myHashTable.remove('alex');

    expect(actual).toBe(15);
    expect(myHashTable.get('alex')).toBeUndefined();
    })

    test('should show that remove function works with multiple values in linked list', () => {
      let myHashTable = new HashTable(5);
      myHashTable.set('alex', 15);
      myHashTable.set('d', 20);
      myHashTable.set('i', 25);
      myHashTable.set('n', 30);

      let actual = myHashTable.remove('i');
  
      expect(actual).toBe(25);
      expect(myHashTable.get('i')).toBeUndefined();
    })

    test('should return return error if trying to remove a value that is not in HashTable', () => {
      let myHashTable = new HashTable(5);
      expect(myHashTable.remove('alex')).toBeUndefined();  
    });
  });

  describe('serialize and deserialize tests', () => {

    test('should show serialize causes hashTable to be turned into a buffer', () => {
      let myHashTable = new HashTable(5);
      myHashTable.set('alex', 15);

      let actual = myHashTable.serialize();
      expect(actual).toBeInstanceOf(Buffer);

    })

    test('should show root value in a deserialized serialized list to be the same as before', () => {
      let myHashTable = new HashTable(5);
      myHashTable.set('alex', 15);
      let serialHash = myHashTable.serialize();
      let deserialHash = HashTable.deserialize(serialHash);

      let hashedVal = myHashTable.multHash('alex');
      let actual = deserialHash.buckets[hashedVal];
  
      expect(actual.head.value['alex']).toBe(15);
    })

    test('should show that deserialized tree still has Tree class methods', () => {
      let myHashTable = new HashTable(5);
      myHashTable.set('alex', 15);
      let serialHash = myHashTable.serialize();
      let deserialHash = HashTable.deserialize(serialHash);

      expect(deserialHash.get('alex')).toBe(15);
    })
  });
});