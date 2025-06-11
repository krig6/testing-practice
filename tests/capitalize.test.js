import { capitalize } from "../src/capitalize"

it('should capitalize a single letter', () => {
  expect(capitalize('a')).toBe('A')
})

it('should capitalize different letters', () => {
  expect(capitalize('b')).toBe('B')
})

it('should return the original string if it does not start with a letter', () => {
  expect(capitalize('#version')).toBe('#version')
})

it('should throw a TypeError if input is null or undefined', () => {
  expect(() => capitalize()).toThrow('capitalize: input must be a non-null string')
})

it('should throw a TypeError if input is an empty string', () => {
  expect(() => capitalize('')).toThrow('capitalize: input must be a non-empty string')
})

it('should throw a TypeError if input is a number', () => {
  expect(() => capitalize(123)).toThrow('capitalize: input must be a string')
})

it('should throw a TypeError if input is a Boolean', () => {
  expect(() => capitalize(true)).toThrow('capitalize: input must be a non-boolean string')
})

