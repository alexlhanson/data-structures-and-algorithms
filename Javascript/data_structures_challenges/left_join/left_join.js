'use strict';

const leftJoin = (leftTable, rightTable) => {
  let results = leftTable;
  if (!leftTable || !rightTable){throw new Error('Error: left join requires two tables')}
  for (const key in rightTable){
    if (leftTable[key]){
      results[key] = [leftTable[key], rightTable[key]];
    }
  }
  return results;
}

module.exports = leftJoin;