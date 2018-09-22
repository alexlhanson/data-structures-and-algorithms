const Queue = require('./queue_with_stacks.js');

describe('queue with stacks', () => {

  test('internal stack size increases with enqueue', () => {
    let myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    let actual = myQueue.storage1.size = 3;
    let expected = 3;
    expect(actual).toBe(expected);
  });

  test('dequeue is removing the first enqueueed item', () => {
    let myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    let actual = myQueue.dequeue();
    let expected = 1;
    expect(actual.value).toBe(expected);
  });

  test('dequeue of empty queue returns undefined', () => {
    let myQueue = new Queue();
    let actual = myQueue.dequeue();
    expect(actual).toBeUndefined();
  });

});