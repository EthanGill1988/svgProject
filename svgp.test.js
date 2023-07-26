describe('getColorHexFromKeyword', () => {
    it('should return the correct hexadecimal value for valid color keywords', () => {
      const { getColorHexFromKeyword } = require('./index');
  
      expect(getColorHexFromKeyword('red')).toBe('#FF0000');
      expect(getColorHexFromKeyword('blue')).toBe('#0000FF');
      expect(getColorHexFromKeyword('green')).toBe('#008000');
      expect(getColorHexFromKeyword('yellow')).toBe('#FFFF00');
    });
  
    it('should return null for invalid color keywords', () => {
      const { getColorHexFromKeyword } = require('./index');
  
      expect(getColorHexFromKeyword('invalidcolor')).toBeNull();
    });
  
    it('should return the hexadecimal value for valid color keywords regardless of case', () => {
      const { getColorHexFromKeyword } = require('./index');
  
      expect(getColorHexFromKeyword('Red').toLowerCase()).toBe('ff0000');
      expect(getColorHexFromKeyword('BLUE').toLowerCase()).toBe('0000ff');
      expect(getColorHexFromKeyword('GReeN').toLowerCase()).toBe('008000');
      expect(getColorHexFromKeyword('yELLoW').toLowerCase()).toBe('ffff00');
      // Add more test cases for color keywords with different cases
    });
  });
  
  