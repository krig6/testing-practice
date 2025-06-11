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

it('should throw a TypeError if input is an Array', () => {
  expect(() => capitalize([1, 2, 3, 4, 5])).toThrow('capitalize: input must not be an array')
})

it('should throw a TypeError if input is an Object', () => {
  expect(() => capitalize({ language: 'JavaScript' })).toThrow('capitalize: input must not be an object')
})

it('should capitalize first character of multi-word strings', () => {
  expect(capitalize('hello world')).toBe('Hello world')
})

it('should return the string unchanged if it is already capitalized', () => {
  expect(capitalize('Node')).toBe('Node')
})

it('should capitalize only the first character in a mixed-case word', () => {
  expect(capitalize('tEsTiNg')).toBe('TEsTiNg')
})

it('should return the original string if it starts with a number', () => {
  expect(capitalize('42answer')).toBe('42answer')
})

it('should not modify strings that start with a space', () => {
  expect(capitalize(' space')).toBe(' space')
})
