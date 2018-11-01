
const radixSort = require('./radix')

describe('radixSort', () => {
  let testArray = [97, 1, 3, 2, 48, 96];
  let testArray2 = [18, 3, 18, 0]
  test('should show that values are sorted after', () => {

    let actual = radixSort(testArray, 10)
    expect(actual).toEqual([1, 2, 3, 48, 96, 97])
  });

  test('should show that duplicate values are also sorted after', () => {

    let actual = radixSort(testArray2, 10)
    expect(actual).toEqual([0, 3, 18, 18]); 
  });

  test('shows empty array sorts to empty array', () => {
  
    let actual = radixSort([], 10);
    expect(actual).toEqual([]);
  })

  test('shows array of one value returns same array', () => {
  
    let actual = radixSort([1], 10);
    expect(actual).toEqual([1]);
  })
});