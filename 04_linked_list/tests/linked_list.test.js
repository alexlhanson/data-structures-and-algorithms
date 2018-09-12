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

  // test('Should show that a linked list with three nodes will reverse their order of links',() => {
  //   let myLinkedList = new LinkedList();
  //   myLinkedList.append('hello');
  //   myLinkedList.append('world');
  //   myLinkedList.append('!');
  //   myLinkedList.reverse();
  //   expect(myLinkedList.tail.value).toBe('hello');
  //   expect(myLinkedList.head.value).toBe('!');
  // });

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
  })

  /********************************************************************************
  *         serialize & deserialize test                                                       *
  ********************************************************************************/
  
  test('should return a linked-list as raw data buffer and back to linked list', () => {
    let myLinkedList = new LinkedList();
    myLinkedList.append('hello');
    myLinkedList.append('World');
    myLinkedList.serialize();
    myLinkedList.deSerialize();
    expect(myLinkedList.reconstituted.tail.value).toBe('World');
  })
});