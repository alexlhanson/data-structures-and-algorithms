'use strict';

const binary = require('./array_binary_search.js');

describe('list with binary search algorithm', () => {

  test('test that binary search algorithm works on odd number array', () => {
  let actual = binary.binarySearch([1, 2, 3, 4, 5], 5)
  let expectedValue = 4
  expect(actual).toBe(expectedValue);
  })

  test('test that binary search algorithm works on even number array', () => {
    let actual = binary.binarySearch([1, 2, 3, 4, 5, 8], 4)
    let expectedValue = 3
    expect(actual).toBe(expectedValue);    
  })

  test('test that empty array returns -1', () => {
    let actual = binary.binarySearch([], 4)
    let expectedValue = -1
    expect(actual).toBe(expectedValue);
  })

  test('test that target not in array returns -1', () => {
    let actual = binary.binarySearch([1, 2, 3, 4, 5, 8], 7)
    let expectedValue = -1
    expect(actual).toBe(expectedValue);
  })
})