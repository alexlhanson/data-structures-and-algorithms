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
    expect(() => {new HashTable()}).toThrow('No buckets number specified');
  })

});