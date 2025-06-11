import { capitalize } from "../src/capitalize"

it('should capitalize a single letter', () => {
  expect(capitalize('a')).toBe('A')
})

it('should capitalize different letters', () => {
  expect(capitalize('b')).toBe('B')
})
