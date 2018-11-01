const radixSort = (unsorted, base) => {
  if(unsorted.length <= 1){
    return unsorted;
  }
  let hashOne = {};
  let hashTwo = {};

  // Init hashtables with appropriate number of buckets
  for (let i = 0; i < base; i++){
    hashOne[i] = [];
    hashTwo[i] = [];
  }

  // Populate first hashtable with unsorted array
  unsorted.forEach(item => {
    hashOne[(item % base)].push(item);
  })

  let range = (Math.max(...unsorted) - Math.min(...unsorted));
  let it = 0;

  // This will sort all values by digit into hashOne
  while (range/Math.pow(base, it) >= 1){
    for (let bucket in hashOne){
      while (hashOne[bucket].length){
        let currentItem = hashOne[bucket].shift();
        hashTwo[getBucket(currentItem, base, it)].push(currentItem);
      }
    }
    [hashOne, hashTwo] = [hashTwo, hashOne];
    it += 1;
  }

  for(let bucket in hashOne){
    while(hashOne[bucket].length){
      hashTwo[0].push(hashOne[bucket].shift());
    }
  }

  return hashTwo[0];
}

const getBucket = (n, base, it) => {
  return Math.floor(n/Math.pow(base, it)) % base;
}

module.exports = radixSort;
