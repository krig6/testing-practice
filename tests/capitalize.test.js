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
