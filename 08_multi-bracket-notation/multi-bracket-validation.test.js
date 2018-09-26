'use strict';

const multiBracketValidation = require('./multi-bracket-validation');

describe('multiBracketValidation', () => {

  test('should show empty string returns true', () => {
    let inputString = '';
    let actual = multiBracketValidation(inputString);
    let expected = true;
    expect(actual).toEqual(true);
  });

  test('should show pair of brackets return true', () => {
  
  let squares = multiBracketValidation('[]');
  let parens = multiBracketValidation('()');
  let curlies = multiBracketValidation('{}');

  expect(squares).toBe(true);
  expect(parens).toBe(true);
  expect(curlies).toBe(true);
  });

  test('Should show true with variety of balanced brackets', () => {
    let pairs = multiBracketValidation('[]{}()');
    let nested = multiBracketValidation('[({})]');

    expect(pairs).toBe(true);
    expect(nested).toBe(true);
  })

  test('Should show that nested unbalanced brackets return false', () => {
    let oneOff = multiBracketValidation('[[[[)]]]]');
    let shuffled = multiBracketValidation('[(])');  

    expect(oneOff).toBe(false);
    expect(shuffled).toBe(false);
  })

  test('Should show that balanced brackets with other characters in between returns true', () => {
    let otherChars = multiBracketValidation('[[[[asdfasdf]]]]');

    expect(otherChars).toBe(true);
  })

});

