'use strict';

const array_shift = require('./array_shift.js');

test('should return an array with the elements in reversed order', () => {
  let actual = array_shift.insertShiftArray([2, 4, 6, 8], 5);
  let expectedValue = [2, 4, 5, 6, 8];
  expect(actual).toEqual(expectedValue);

  actual = array_shift.insertShiftArray([4, 8, 15, 23, 42], 16),
  expectedValue = [4, 8, 15, 16, 23, 42];
  expect(actual).toEqual(expectedValue);

})

test('should return an array with one element in empty array', () => {
  let actual = array_shift.insertShiftArray([],5);
  let expectedValue = [5]
  expect(actual).toEqual(expectedValue);

})
