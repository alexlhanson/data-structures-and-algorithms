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
});