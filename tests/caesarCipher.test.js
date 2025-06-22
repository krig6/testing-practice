import { caesarCipher } from "../src/caesarCipher";

describe("caesarCipher", () => {
  describe("basic functionality", () => {
    it("shifts a single lowercase letter correctly", () => {
      expect(caesarCipher('a', 1)).toBe('b')
    })

    it("shifts multiple lowercase letters correctly", () => {
      expect(caesarCipher('shift', 1)).toBe('tijgu')
    })

    it("shifts a single uppercase letter correctly", () => {
      expect(caesarCipher('J', 5)).toBe('O')
    })

    it("shifts multiple uppercase letters correctly", () => {
      expect(caesarCipher('DEVELOPER', 10)).toBe('NOFOVYZOB')
    })
  })

  describe("string parameter validation", () => {
    it('throws a TypeError if input is undefined', () => {
      expect(() => caesarCipher()).toThrow('caesarCipher: expected string, received undefined')
    })

    it('throws a TypeError if input is an empty string', () => {
      expect(() => caesarCipher('')).toThrow('caesarCipher: expected non-empty input')
    })

    it('throws a TypeError if input is null', () => {
      expect(() => caesarCipher(null)).toThrow('caesarCipher: expected string, received null')
    })

    it('throws a TypeError if input is a number', () => {
      expect(() => caesarCipher(1337)).toThrow('caesarCipher: expected string, received number')
    })

    it('throws a TypeError if input is a boolean', () => {
      expect(() => caesarCipher(false)).toThrow('caesarCipher: expected string, received boolean')
    })

    it('throws a TypeError if input is an array', () => {
      expect(() => caesarCipher(['not', 'a', 'string'])).toThrow('caesarCipher: expected string, received array')
    })

    it('throws a TypeError if input is an object', () => {
      expect(() => caesarCipher({ framework: 'React' })).toThrow('caesarCipher: expected string, received object')
    })
  })

  describe("shift parameter validation", () => {
    it('throws a TypeError if shift is null', () => {
      expect(() => caesarCipher('hello', null)).toThrow('caesarCipher: shift must be a number, received null')
    })

    it('throws a TypeError if shift is undefined', () => {
      expect(() => caesarCipher('hello')).toThrow('caesarCipher: shift parameter is required')
    })

    it('throws a TypeError if shift is not a number', () => {
      expect(() => caesarCipher('hello', 'not a number')).toThrow('caesarCipher: shift must be a number')
    })

    it('throws a TypeError if shift is NaN', () => {
      expect(() => caesarCipher('hello', NaN)).toThrow('caesarCipher: shift must be a valid number')
    })
  })

  describe("wrapping and edge cases", () => {
    it("wraps lowercase letters from z to a", () => {
      expect(caesarCipher('xyz', 3)).toBe('abc')
    })

    it("wraps backwards from a to z with negative shift", () => {
      expect(caesarCipher('abc', -3)).toBe('xyz')
    })

    it("handles negative shifts for lowercase letters", () => {
      expect(caesarCipher('bcd', -1)).toBe('abc')
    })

    it("wraps uppercase letters from z to a", () => {
      expect(caesarCipher('XYZ', 7)).toBe('EFG')
    })

    it("wraps backwards from A to Z with negative shift", () => {
      expect(caesarCipher('ABC', -3)).toBe('XYZ')
    })

    it("handles negative shifts for uppercase letters", () => {
      expect(caesarCipher('BCD', -1)).toBe('ABC')
    })

    it("preserves case when shifting mixed case letters", () => {
      expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    })

    it("leaves non-alphabetic characters unchanged", () => {
      expect(caesarCipher('hello, world!', 1)).toBe('ifmmp, xpsme!')
    })

    it("handles strings with numbers and special characters", () => {
      expect(caesarCipher('abc123XYZ!@#', 1)).toBe('bcd123YZA!@#')
    })

    it("handles zero shift", () => {
      expect(caesarCipher('hello', 0)).toBe('hello')
    })

    it("handles large positive shifts", () => {
      expect(caesarCipher('abc', 26)).toBe('abc') // 26 is full alphabet cycle
    })

    it("handles large negative shifts", () => {
      expect(caesarCipher('abc', -26)).toBe('abc')
    })
  })
})
