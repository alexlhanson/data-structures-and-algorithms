'use strict';
const findRepeatWord = require('./find_repeated_word');

describe('findRepeatedWord function', () => {

  test('should show that function can find the first repeated word in a string', () => {
    let string = "This is my random testing sentence to see which of my words get caught for repeating"

    let actual = findRepeatWord(string);

    expect(actual).toEqual("my");
  })

  test('if there is no repeated words than a message string is returned', () => {
    let string = "This is my random testing sentence to see which of the words get caught for repeating"

    let actual = findRepeatWord(string);

    expect(actual).toEqual('No repeated words encountered');
  })

  test('should show errors for non-string data types', () => {
  
    expect(() => {findRepeatWord(5)}).toThrow('Error: function only accepts strings');
    expect(() => {findRepeatWord([])}).toThrow('Error: function only accepts strings');
    expect(() => {findRepeatWord(true)}).toThrow('Error: function only accepts strings');
    expect(() => {findRepeatWord(null)}).toThrow('Error: function only accepts strings');
    expect(() => {findRepeatWord()}).toThrow('Error: function only accepts strings');

  })
});