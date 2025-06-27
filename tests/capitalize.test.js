import { capitalize } from '../src/capitalize';

describe('capitalize', () => {
  describe('valid inputs', () => {
    it('capitalizes a single letter', () => {
      expect(capitalize('z')).toBe('Z');
    });

    it('capitalizes only the first character in a mixed-case word', () => {
      expect(capitalize('jAvAsCrIpT')).toBe('JAvAsCrIpT');
    });

    it('capitalizes first character of a multi-word string', () => {
      expect(capitalize('hello world')).toBe('Hello world');
    });
  });

  describe('strings that should remain unchanged', () => {
    it('returns the original string if it starts with special characters', () => {
      expect(capitalize('#blessed')).toBe('#blessed');
    });

    it('returns the original string if it starts with a number', () => {
      expect(capitalize('404notfound')).toBe('404notfound');
    });

    it('returns the original string if it is already capitalized', () => {
      expect(capitalize('JavaScript')).toBe('JavaScript');
    });

    it('returns the original string if it is a single special character', () => {
      expect(capitalize('$')).toBe('$');
    });

    it('returns the original string if it starts with whitespace', () => {
      expect(capitalize('   indented')).toBe('   indented');
      expect(capitalize(' tabby')).toBe(' tabby');
      expect(capitalize('\tfunction')).toBe('\tfunction');
      expect(capitalize('\nnewline')).toBe('\nnewline');
    });
  });

  describe('error handling', () => {
    it('throws a TypeError if input is undefined', () => {
      expect(() => capitalize()).toThrow('capitalize: expected string, received undefined');
    });

    it('throws a TypeError if input is an empty string', () => {
      expect(() => capitalize('')).toThrow('capitalize: expected non-empty input');
    });

    it('throws a TypeError if input is null', () => {
      expect(() => capitalize(null)).toThrow('capitalize: expected string, received null');
    });

    it('throws a TypeError if input is a number', () => {
      expect(() => capitalize(1337)).toThrow('capitalize: expected string, received number');
    });

    it('throws a TypeError if input is a boolean', () => {
      expect(() => capitalize(false)).toThrow('capitalize: expected string, received boolean');
    });

    it('throws a TypeError if input is an array', () => {
      expect(() => capitalize(['not', 'a', 'string'])).toThrow('capitalize: expected string, received array');
    });

    it('throws a TypeError if input is an object', () => {
      expect(() => capitalize({ framework: 'React' })).toThrow('capitalize: expected string, received object');
    });
  });
});

