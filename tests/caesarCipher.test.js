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

it("shifts multiple uppercase letters correctly", () => {
  expect(caesarCipher('DEVELOPER', 10)).toBe('NOFOVYZOB')
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


