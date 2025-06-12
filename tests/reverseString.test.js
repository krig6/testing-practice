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
