import { reverseString } from '../src/reverseString';

describe('reverseString', () => {
  describe('valid inputs', () => {
    it('returns a single character unchanged', () => {
      expect(reverseString('a')).toBe('a');
    });

    it('reverses a multi-character string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    it('reverses a string containing numbers', () => {
      expect(reverseString('js2025')).toBe('5202sj');
    });

    it('reverses a string containing symbols', () => {
      expect(reverseString('error!!')).toBe('!!rorre');
    });

    it('reverses a string with mixed uppercase and lowercase letters', () => {
      expect(reverseString('GitHub')).toBe('buHtiG');
    });

    it('reverses a string that includes whitespace', () => {
      expect(reverseString('foo bar')).toBe('rab oof');
      expect(reverseString(' foo bar baz')).toBe('zab rab oof ');
      expect(reverseString(' spaced ')).toBe(' decaps ');
      expect(reverseString('\ttab')).toBe('bat\t');
      expect(reverseString('\nnewline')).toBe('enilwen\n');
    });
  });

  describe('error handling', () => {
    it('throws a TypeError if input is undefined', () => {
      expect(() => reverseString()).toThrow('reverseString: expected string, received undefined');
    });

    it('throws a TypeError if input is null', () => {
      expect(() => reverseString(null)).toThrow('reverseString: expected string, received null');
    });

    it('throws a TypeError if input is an empty string', () => {
      expect(() => reverseString('')).toThrow('reverseString: expected non-empty input');
    });

    it('throws a TypeError if input is a number', () => {
      expect(() => reverseString(1337)).toThrow('reverseString: expected string, received number');
    });

    it('throws a TypeError if input is a boolean', () => {
      expect(() => reverseString(false)).toThrow('reverseString: expected string, received boolean');
    });

    it('throws a TypeError if input is an array', () => {
      expect(() => reverseString(['this', 'is', 'an', 'array'])).toThrow('reverseString: expected string, received array');
    });

    it('throws a TypeError if input is an object', () => {
      expect(() => reverseString({ language: 'JavaScript' })).toThrow('reverseString: expected string, received object');
    });
  });
});
