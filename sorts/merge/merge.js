let mergeSort = (array, compare) => {
  compare = compare ? compare : (a, b) => a < b;
  
  if (array.length < 2) return array;

  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  
 return _merge(mergeSort(left, compare), mergeSort(right, compare), compare );
 
};

let _merge = (left, right, compare) => {
  let result = [];

  while (left.length || right.length){
    if(!left.length){
      result.push(right.shift());
      continue;
    }

    if(!right.length){
      result.push(left.shift());
      continue;
    }

    if(compare(left[0], right[0])){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
}

module.exports = mergeSort;