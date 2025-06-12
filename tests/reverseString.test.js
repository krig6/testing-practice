import { reverseString } from "../src/reverseString";

it('returns a single character unchanged', () => {
  expect(reverseString('a')).toBe('a')
})

it('reverses a multi-character string', () => {
  expect(reverseString('hello')).toBe('olleh')
})

it('reverses a string containing spaces', () => {
  expect(reverseString('foo bar')).toBe('rab oof')
})

it('reverses a string containing numbers', () => {
  expect(reverseString('js2025')).toBe('5202sj')
})

it('reverses a string containing symbols', () => {
  expect(reverseString('error!!')).toBe('!!rorre')
})

it('reverses a string with mixed uppercase and lowercase letters', () => {
  expect(reverseString('GitHub')).toBe('buHtiG')
})

it('reverses a string with mixed uppercase and lowercase letters', () => {
  expect(reverseString('GitHub')).toBe('buHtiG')
})

it('reverses a string that includes tab characters', () => {
  expect(reverseString('\ttab')).toBe('bat\t')
})

it('reverses a string that includes newline characters', () => {
  expect(reverseString('\nnewline')).toBe('enilwen\n')
})

it('throws a TypeError if input is undefined', () => {
  expect(() => reverseString()).toThrow('reverseString: expected string, received undefined')
})

it('throws a TypeError if input is null', () => {
  expect(() => reverseString(null)).toThrow('reverseString: expected string, received null')
})

it('throws a TypeError if input is an empty string', () => {
  expect(() => reverseString('')).toThrow('reverseString: expected non-empty string')
})

it('throws a TypeError if input is a number', () => {
  expect(() => reverseString(1337)).toThrow('reverseString: expected string, received number')
})

it('throws a TypeError if input is a boolean', () => {
  expect(() => reverseString(false)).toThrow('reverseString: expected string, received boolean')
})

it('throws a TypeError if input is an array', () => {
  expect(() => reverseString(['this', 'is', 'an', 'array'])).toThrow('reverseString: expected string, received array')
})
