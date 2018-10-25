'use strict';

const leftJoin = require('../left_join/left_join');

describe('left join of hash tables', () => {
  let synonym = {};
  synonym.fond = "enamored";
  synonym.wrath = "anger";
  synonym.diligent = "employed";
  synonym.outfit = "garb";
  synonym.guide = "usher";

  let antonym = {};
  antonym.fond = "averse";
  antonym.wrath = "delight";
  antonym.diligent = "idle";
  antonym.outfit = "follow";
  antonym.flow = "jam";


  test('should show that collisions on first hashtable are chained into array', () => {
    let actual = leftJoin(synonym, antonym)
    
    expect(actual.fond).toEqual(['enamored', 'averse']);
    
  })

  test('should show that keys in the antonyms do not get included in final object', () => {
    let actual = leftJoin(synonym, antonym);
    expect(actual.flow).toBeFalsy();
  });

  test('should show that if only one hashtable is included an error is thrown', () => {
    expect(() => {leftJoin(synonym)}).toThrow('Error: left join requires two tables');
  });

});