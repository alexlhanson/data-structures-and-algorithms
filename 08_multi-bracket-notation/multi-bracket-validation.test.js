'use strict';

import multiBracketValidation from './multi-bracket-validation';

describe('multiBracketValidation', () => {

  test('should show empty string returns true', () => {
    let inputString = '';
    let actual = multiBracketValidation(inputString);
    let expected = true;
    expect(actual).toEqual(true);
  })
});

