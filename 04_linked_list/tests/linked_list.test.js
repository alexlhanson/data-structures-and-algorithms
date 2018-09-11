'use strict';

const LinkedList = require('./../lib/linked_list');

describe('Linked-List constructor module', () => {

  /********************************************************************************
  *         linked-list class tests                                               *
  ********************************************************************************/

  test('should instantiate a linked-list with head value of null', () => {
    let actual = new LinkedList();
    let expected = null;
    expect(actual.head).toBe(null);
  })

});