'use strict';

const insertionSort = require('./insertion')

describe('insertionSort', () => {
  let testArray = [97, 1, 3, 2, 48, 96];
  test('should show that values are sorted after', () => {

    let actual = insertionSort(testArray)
    expect(actual).toEqual([1, 2, 3, 48, 96, 97])
  });

  test('should show that values are sorted descending by switching compare', () => {
  
    let actual = insertionSort(testArray, (a, b) => b < a)
    expect(actual).toEqual([97, 96, 48, 3, 2, 1])

  });

  test('shows empty array sorts to empty array', () => {
  
    let actual = insertionSort([]);
    expect(actual).toEqual([]);
  });
});