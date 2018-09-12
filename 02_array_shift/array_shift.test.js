'use strict';

const array_shift = require('./array_shift.js');

test('should return an array with value inserted', () => {
  let actual = array_shift.insertShiftArray([2, 4, 6, 8], 5);
  let expectedValue = [2, 4, 5, 6, 8];
  expect(actual).toEqual(expectedValue);

})

test('should return an array with one element with shift on empty array', () => {
  let actual = array_shift.insertShiftArray([],5);
  let expectedValue = [5]
  expect(actual).toEqual(expectedValue);

})
