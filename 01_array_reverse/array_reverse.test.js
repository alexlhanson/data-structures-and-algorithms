'use strict';

const array_reverse = require('./array_reverse.js');

test('should return an array with the elements in reversed order', () => {
  let actual = array_reverse.reverseArray([1, 3, 2]),
    expectedValue = [2, 3, 1];
  expect(actual).toEqual(expectedValue);

  actual = array_reverse.reverseArray([1, 'dog', true]);
  expectedValue = [true, 'dog', 1];
  expect(actual).toEqual(expectedValue);
})

