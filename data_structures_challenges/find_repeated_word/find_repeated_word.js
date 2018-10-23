'use strict';

const findRepeatWord = (book) => {
  if (typeof book !== 'string'){throw new Error('Error: function only accepts strings')}
  let words = book.split(' ');
  let wordCount = {};

  for (let i = 0; i < words.length; i++){
    if (wordCount[words[i]]){
      return words[i];
    } else {
      wordCount[words[i]] = 1;
    }
  }
  return('No repeated words encountered');
}

module.exports = findRepeatWord;