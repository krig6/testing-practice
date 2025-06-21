import { caesarCipher } from "../src/caesarCipher";

it("shifts a single letter correctly", () => {
  expect(caesarCipher('a', 1)).toBe('b')
})
