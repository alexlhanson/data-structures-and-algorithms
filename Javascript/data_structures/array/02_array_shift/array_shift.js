'use strict';

module.exports = exports = {};

exports.insertShiftArray = (inputArr, item) => {
  let middle = Math.ceil(inputArr.length/2);
  for (let i = inputArr.length - 1; i >= middle; i--){
    inputArr[i + 1] = inputArr[i];
  }
  inputArr[middle] = item;
  return inputArr;
}