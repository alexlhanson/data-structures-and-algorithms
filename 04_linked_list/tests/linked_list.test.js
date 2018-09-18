'use strict';

const LinkedList = require('./../lib/linked_list');

describe('Linked-List constructor module', () => {

  /********************************************************************************
  *         linked-list class tests                                               *
  ********************************************************************************/

  test('should instantiate a linked-list with head value of null', () => {
    let actual = new LinkedList();
    expect(actual.head).toBeNull();
  })

  /********************************************************************************
  *         append method tests                                                   *
  ********************************************************************************/

  test('should add new Nodes to LinkedList with tail showing World', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('World');
    expect(myLinkedList.tail.value).toBe('World');
  });

  test('should maintain reference on head after appending', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('World');
    expect(myLinkedList.head.value).toBe('hello');
  });

  test('should show linked-list works with various datatypes', () => {
    let myLinkedList = new LinkedList();

    myLinkedList.append(3);
    expect(myLinkedList.head.value).toBe(3);

    myLinkedList.append(true);
    expect(myLinkedList.tail.value).toBe(true);

    myLinkedList.append(['Sam']);
    expect(myLinkedList.tail.value).toEqual(['Sam']);

  });

  /********************************************************************************
  *         prepend method tests                                                  *
  ********************************************************************************/

  test('Should show that node is added to the beginning of linked list', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('world');
    myLinkedList.prepend('hello');
    expect(myLinkedList.head.value).toBe('hello');
  });

  test('Should show that after prepending the tail will maintain its reference', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('world');
    myLinkedList.prepend('hello');
    expect(myLinkedList.tail.value).toBe('world');
  });

  /********************************************************************************
  *         reverse method tests                                                  *
  ********************************************************************************/

  test('Should show that a linked list with three nodes will reverse their order of links', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('world');
    myLinkedList.append('!');
    myLinkedList.reverse();
    expect(myLinkedList.tail.value).toBe('hello');
    expect(myLinkedList.head.value).toBe('!');
  });

  /********************************************************************************
  *         remove method tests                                                   *
  ********************************************************************************/
  test('should show that when world is removed that the next node after hello is !', () => {

    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('world');
    myLinkedList.append('!');
    myLinkedList.remove(1);
    expect(myLinkedList.head.next.value).toBe('!');
  });

  test('should show that when the first node is removed that the head is now world', () => {

    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('world');
    myLinkedList.append('!');
    myLinkedList.remove(0);
    expect(myLinkedList.head.value).toBe('world');
  });

  /********************************************************************************
  *         insert before method test                                             *
  ********************************************************************************/
  test('should show that insertion is inserted before world', () => {

    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('world');
    myLinkedList.append('!');
    myLinkedList.insertBefore('!', 'insertion');
    expect(myLinkedList.current.value).toBe('!');
    expect(myLinkedList.prev.next.value).toBe('insertion');
  });

  test('should show that error is thrown when the search value is not in the list', () => {

    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('world');
    myLinkedList.append('!');
    expect(() => { myLinkedList.insertBefore('OMG', 'insertion') }).toThrowError('Value not found in list');

  });

  /********************************************************************************
  *         insert after method test                                              *
  ********************************************************************************/
  test('should show that instertion is inserted after world', () => {

    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('world');
    myLinkedList.append('!');
    myLinkedList.insertAfter('world', 'insertion');
    expect(myLinkedList.current.value).toBe('world');
    expect(myLinkedList.current.next.value).toBe('insertion');
  });

  test('should show that error is thrown when the search value is not in the list', () => {

    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('world');
    myLinkedList.append('!');
    expect(() => { myLinkedList.insertAfter('OMG', 'insertion') }).toThrowError('Value not found in list');

  });
  /********************************************************************************
  *         serialize & deserialize tests                                                       *
  ********************************************************************************/
  test('should return a linked-list as raw data buffer', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('World');
    let serializedList = myLinkedList.serialize();
    expect(typeof serializedList).toBe('object');
  });

  test('should return a linked-list as raw data buffer and back to linked list', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('World');
    let serializedList = myLinkedList.serialize();
    let deserializedList = LinkedList.deserialize(serializedList);
    expect(deserializedList.head.value).toBe('hello');
  });

  test('deserialized list has properties of the Class Linked List', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('World');
    let serializedList = myLinkedList.serialize();
    let deserializedList = LinkedList.deserialize(serializedList);
    deserializedList.append('still the world');
    expect(deserializedList.tail.value).toBe('still the world');
  });

  /********************************************************************************
  *         k from end tests                                                      *
  ********************************************************************************/

  test('should return the value from the second node from the end', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('world');
    myLinkedList.append('!');
    expect(myLinkedList.kFromEnd(1)).toBe('world');
  });
  
  test('should return the value from the second node from the end', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('world');
    myLinkedList.append('!');
    expect(()=>{myLinkedList.kFromEnd(4)}).toThrowError('number is out of range of list');
  });

  test('should return the value from the second node from the end', () => {
    let myLinkedList = new LinkedList();
    expect(()=>{myLinkedList.kFromEnd(0)}).toThrowError('list is empty');
  });

  /********************************************************************************
  *         merge list tests                                                      *
  ********************************************************************************/
  test('should show two lists where 2nd is zipped into first staggered', () =>{

    let LLOne = new LinkedList();
    LLOne.append(1);
    LLOne.append(2);
    LLOne.append(3);
    let LLTwo = new LinkedList();
    LLOne.append(4);
    LLOne.append(5);
    LLOne.append(6);
    LLOne.head, LLOne.length, LLOne.tail = LinkedList.mergeLists(LLOne, LLTwo);
    
    expect(LLOne.head.value).toBe(1);
    expect(LLOne.tail.value).toBe(6);
    expect(LLOne.length).toBe(6);
  });

  test('should show two lists where 2nd is zipped into first staggered', () =>{

    let LLOne = new LinkedList();
    let LLTwo = new LinkedList();
    LLOne.append(4);
    LLOne.append(5);
    LLOne.append(6);
    LLOne.head, LLOne.length, LLOne.tail = LinkedList.mergeLists(LLOne, LLTwo);
    
    expect(LLOne.head.value).toBe(4);
    expect(LLOne.tail.value).toBe(6);
    expect(LLOne.length).toBe(3);
  });

});