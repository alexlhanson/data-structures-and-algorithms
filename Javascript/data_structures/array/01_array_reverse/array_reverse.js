'use strict';

module.exports = exports = {};

exports.reverseArray = (inputArr) => {
  let reversedArr = [],
    j = 0;
  
  for (let i = inputArr.length - 1; i >= 0; i--){
    reversedArr[j] = inputArr[i];
    j++;
  }
  
  return reversedArr;
}
