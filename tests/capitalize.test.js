import { capitalize } from "../src/capitalize"

it('should capitalize a single letter', () => {
  expect(capitalize('a')).toBe('A')
})
