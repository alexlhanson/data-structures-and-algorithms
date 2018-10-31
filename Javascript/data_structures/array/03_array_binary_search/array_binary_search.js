'use strict';

module.exports = exports;

exports.binarySearch = (inputArr, searchValue) => {
  let end = inputArr.length -1,
    beg = 0;
  
  while (beg <= end){
    let mid = Math.floor((beg + end)/2);
    if (searchValue === inputArr[mid]){
      return mid
    } else if (searchValue > inputArr[mid]){
      beg = mid + 1;
    } else {end = mid -1}
  }
  return -1
}

