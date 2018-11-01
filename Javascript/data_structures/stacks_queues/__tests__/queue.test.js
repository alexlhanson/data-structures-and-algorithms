'use strict';

const Queue = require('../lib/queue');

describe('queue constructor module', () => {

  /********************************************************************************
  *         queue class tests                                                     *  
  ********************************************************************************/

  test('should instantiate a queue with top value of null', () => {
    let actual = new Queue();
    expect(actual.storage.head).toBeNull();
  })

  /********************************************************************************
  *         enqueue method tests                                                  *
  ********************************************************************************/

  test('Should show enqueueing twice to the top will reference', () => {
    let myQueue = new Queue();
    myQueue.enqueue('world');
    myQueue.enqueue('hello');
    expect(myQueue.storage.head.value).toBe('world');
  });

  test('Should show enqueue works with different data types', () => {
    let myQueue = new Queue();
    myQueue.enqueue(1);
    expect(myQueue.storage.head.value).toBe(1);

    myQueue.dequeue();
    myQueue.enqueue(true);
    expect(myQueue.storage.head.value).toBe(true);

    myQueue.dequeue();
    myQueue.enqueue({})
    expect(myQueue.storage.head.value).toEqual({});

    myQueue.dequeue();
    myQueue.enqueue(null)
    expect(myQueue.storage.head.value).toBe(null);
  });

  test('Should show enqueue with nothing ', () => {
    let myQueue = new Queue();
    expect(() => {
      myQueue.enqueue();
    }).toThrow('Error: enqueue of undefined not accepted');
  })

  /********************************************************************************
  *         dequeue method tests                                                  *
  ********************************************************************************/
  test('Should show dequeue will return top node', () => {
    let myQueue = new Queue();
    myQueue.enqueue('hello');
    let actual = myQueue.dequeue();
    expect(actual.value).toBe('hello');
  });

  test('Should show dequeue works with different data types', () => {
    let myQueue = new Queue();
    myQueue.enqueue('one');
    let actual = myQueue.dequeue();
    expect(actual.value).toBe('one');
    
    myQueue.enqueue(true);
    actual = myQueue.dequeue();
    expect(actual.value).toBe(true);

    myQueue.enqueue(null);
    actual = myQueue.dequeue();
    expect(actual.value).toBe(null);

    myQueue.enqueue({});
    actual = myQueue.dequeue();
    expect(actual.value).toEqual({});
  });


  test('Should show dequeue of empty queue is undefined', () => {
    let myQueue = new Queue();
    let actual = myQueue.dequeue();

    expect(actual).toBeUndefined();
  })

  /********************************************************************************
  *         serialize and deserialize methods tests                               *
  ********************************************************************************/

  test('Should show serialize causes stack to be turned into a buffer', () => {
    let myQueue = new Queue();
    myQueue.enqueue('hello');
    myQueue.enqueue('world');
    let actual = myQueue.serialize();
    let expected = 'object';
    expect(typeof (actual)).toBe('object');

  })

  test('should show value on top of Queue in a deserialized serialized list to be the same as before', () => {
    let myQueue = new Queue();
    myQueue.enqueue('hello');
    myQueue.enqueue('world');
    let serializedQueue = myQueue.serialize();
    let deserializedQueue = Queue.deserialize(serializedQueue);
    expect(deserializedQueue.storage.head.value).toBe('hello');
  })

  test('should show that deserialized Queue still has Queue class methods', () => {
    let myQueue = new Queue();
    myQueue.enqueue('hello');
    myQueue.enqueue('world');
    let serializedQueue = myQueue.serialize();
    let deserializedQueue = Queue.deserialize(serializedQueue);
    let dequeuedNode = deserializedQueue.dequeue();
    expect(dequeuedNode.value).toBe('hello');
  })

});