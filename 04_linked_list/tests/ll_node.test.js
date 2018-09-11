'use strict';

const Node = require('./../lib/ll_node.js');

describe('Linked-List constructor module', () => {

  /********************************************************************************
  *         linked-list class tests                                               *
  ********************************************************************************/

  test('should instantiate a linked-list with head value of null', () => {
    let actual = new Node('hi');
    let expected = 'hi';
    expect(actual.value).toBe(expected);
  })

});'use strict';

