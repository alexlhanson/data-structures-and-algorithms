const quickSort = (unsorted) => {

  if (unsorted.length < 2){
    return unsorted;
  } else {
    let left = [];
    let right = [];
    let pivot = unsorted.pop();
    unsorted.forEach(item => {
      if (item < pivot){
        left.push(item);
      } else {
        right.push(item);
      }
    })
    let results = quickSort(left).concat(pivot, quickSort(right));

    return results ;
  }
}

module.exports = quickSort;
