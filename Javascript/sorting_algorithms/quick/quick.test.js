'use strict';

const quickSort = require('./quick')

describe('quickSort', () => {
  let testArray = [97, 1, 3, 2, 48, 96];
  let testArray2 = [-5, 18, 9.5, 0]
  test('should show that values are sorted after', () => {

    let actual = quickSort(testArray)
    expect(actual).toEqual([1, 2, 3, 48, 96, 97])
  });

  test('should show that negative values are sorted after', () => {

    let actual = quickSort(testArray2)
    expect(actual).toEqual([-5, 0, 9.5, 18])
  });

  test('shows empty array sorts to empty array', () => {
  
    let actual = quickSort([]);
    expect(actual).toEqual([]);
  })
});