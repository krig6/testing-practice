import { caesarCipher } from "../src/caesarCipher";

it("shifts a single lowercase letter correctly", () => {
  expect(caesarCipher('a', 1)).toBe('b')
})

it("shifts multiple lowercase letters correctly", () => {
  expect(caesarCipher('shift', 1)).toBe('tijgu')
})

it("wraps lowercase letters from z to a", () => {
  expect(caesarCipher('xyz', 3)).toBe('abc')
})

it("wraps backwards from a to z with negative shift", () => {
  expect(caesarCipher('abc', -3)).toBe('xyz')
})

it("handles negative shifts for lowercase letters", () => {
  expect(caesarCipher('bcd', -1)).toBe('abc')
})

it("shifts a single uppercase letter correctly", () => {
  expect(caesarCipher('J', 5)).toBe('O')
})
