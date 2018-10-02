import { romanNumerals } from '../src/business.js';

describe('romanNumerals', function() {

  it('should return false for non numeric inputs', function() {

    var nonNumeric = "dog";
    expect(Number.isNaN(nonNumeric)).toBe(false);
});
  it('should return false for numbers that are more than 3999', function() {
    expect(romanNumerals(4000)).toBe(false);
  });
  it('should return false for numbers less than one', function() {
    expect(romanNumerals(.5)).toBe(false);
  });
  it('should convert predefined values to corresponding symbols', function() {
    var inputtedValue1 = 50;
    expect(romanNumerals(inputtedValue1)).toBe("L");
  });
  it('should return the symbol that is the highest factor of the input until the remainder is zero', function() {
    var inputtedValue2 = 72;
    expect(romanNumerals(inputtedValue2)).toBe("LXXII");
  });
  it('should not return more than three identical symbols in a row, using subtraction instead', function(){
    var inputtedValue3 = 74;
    expect(romanNumerals(inputtedValue3)).toBe("LXXIV");
  });
});
