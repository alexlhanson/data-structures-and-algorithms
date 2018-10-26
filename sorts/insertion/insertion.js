'use strict';

const insertionSort = (array, compare) => {
  compare = compare ? compare : (a, b) => a < b;
  for (let i = 1; i < array.length; i++){
    let j = i - 1;
    while (j >= 0){
      if (j === 0 && compare(array[i], array[j])){
        array.splice(j, 0, array[i]);
        array.splice(i + 1, 1);
      } else if (!compare(array[i], array[j])){
        array.splice(j + 1, 0, array[i])
        array.splice(i + 1, 1)
        break;        
      }
      j--;
    }
  }
  return array;
}

module.exports = insertionSort;