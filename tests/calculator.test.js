import Calculator from "../src/calculator"

const calculator = new Calculator()

it("adds two positive integers", () => {
  expect(calculator.add(100, 50)).toBe(150)
})

it("adds two negative integers", () => {
  expect(calculator.add(-500, -500)).toBe(-1000)
})

it("adds a positive and a negative integer", () => {
  expect(calculator.add(-500, 500)).toBe(0)
})

it("adds two zeros", () => {
  expect(calculator.add(0, 0)).toBe(0)
})

it("adds a positive number and zero", () => {
  expect(calculator.add(50, 0)).toBe(50)
})

it("adds a negative number and zero", () => {
  expect(calculator.add(-35, 0)).toBe(-35)
})

it("adds a float and zero", () => {
  expect(calculator.add(-35.5, 0)).toBe(-35.5)
})

it("adds two small floating-point numbers", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3)
})

it("adds positive zero and negative zero", () => {
  expect(calculator.add(-0, 0)).toBe(0)
})

it("adds two very large numbers", () => {
  expect(calculator.add(1_000_000_000, 2_000_000_000)).toBe(3_000_000_000)
})
