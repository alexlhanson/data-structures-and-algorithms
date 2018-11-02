'use strict';

const Stack = require('../../data_structures/stacks_queues/lib/stack');

let multiBracketValidation = (inputString) => {
  
  let bracketObj = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  
  let closers = Object.keys(bracketObj);
  let openers = Object.values(bracketObj);

  let bracketStack = new Stack;

  for (let char of inputString){
    if (openers.includes(char)){
      bracketStack.push(char);
    } else if (bracketObj[char]){
      let currBrack = bracketStack.peek();
      if (bracketObj[char] === currBrack){
        bracketStack.pop();
      }  else { return false } 
    }
  }
  if (bracketStack.size === 0){ return true}
  else { return false}

};

module.exports = multiBracketValidation;