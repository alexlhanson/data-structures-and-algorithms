'use strict';

const Stack = require('./../lib/stack');

describe('stack constructor module', () => {

  /********************************************************************************
  *         stack class tests                                               *
  ********************************************************************************/

  test('should instantiate a stack with top value of null', () => {
    let actual = new Stack();
    expect(actual.storage.head).toBeNull();
  })

  /********************************************************************************
  *         push method tests                                                     *
  ********************************************************************************/

  test('Should show pushing twice to the top will reference', () => {
    let myStack = new Stack();
    myStack.push('world');
    myStack.push('hello');
    expect(myStack.storage.head.value).toBe('hello');
  });

  test('Should show push works with different data types', () => {
    let myStack = new Stack();
    myStack.push('world');
    myStack.push(1);
    expect(myStack.storage.head.value).toBe(1);

    myStack.push(true)
    expect(myStack.storage.head.value).toBe(true);

    myStack.push({})
    expect(myStack.storage.head.value).toEqual({});

    myStack.push(null)
    expect(myStack.storage.head.value).toBe(null);
  });

  test('Should show push with nothing ', () => {
    let myStack = new Stack();
    expect(() => {
      myStack.push();
    }).toThrow('Error: push of undefined not accepted');
  }) 

  /********************************************************************************
  *         pop method tests                                                      *
  ********************************************************************************/

  test('Should show pop works with different data types', () => {
    let myStack = new Stack();
    myStack.push('one');
    let actual = myStack.pop();
    expect(actual.value).toBe('one');

    myStack.push(true);
    actual = myStack.pop();
    expect(actual.value).toBe(true);

    myStack.push(null);
    actual = myStack.pop();
    expect(actual.value).toBe(null);

    myStack.push({});
    actual = myStack.pop();
    expect(actual.value).toEqual({});
  });

  test('Should show pop will return top node', () => {
    let myStack = new Stack();
    myStack.push('hello');
    let actual = myStack.pop();
    expect(actual.value).toBe('hello');
  });

  test('Should show pop of empty stack is undefined', () => {
    let myStack = new Stack();
    let actual = myStack.pop();

    expect(actual).toBeUndefined();
  })

  /********************************************************************************
  *         serialize and deserialize methods tests                               *
  ********************************************************************************/
  
  test('Should show serialize causes stack to be turned into a buffer', () => {
    let myStack = new Stack();
    myStack.push('hello');
    myStack.push('world');
    let actual = myStack.serialize();
    let expected = 'object';
    expect(typeof (actual)).toBe('object');

  })

  test('should show value on top of stack in a deserialized serialized list to be the same as before', () => {
    let myStack = new Stack();    
    myStack.push('hello');
    myStack.push('world');
    let serializedStack = myStack.serialize();
    let deserializedStack = Stack.deserialize(serializedStack);
    expect(deserializedStack.storage.head.value).toBe('world');
  })

  test('should show that deserialized stack still has Stack class methods', () => {
    let myStack = new Stack();    
    myStack.push('hello');
    myStack.push('world');
    let serializedStack = myStack.serialize();
    let deserializedStack = Stack.deserialize(serializedStack);
    let poppedNode = deserializedStack.pop(); 
    expect(poppedNode.value).toBe('world');
  })

});