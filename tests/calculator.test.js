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

it("subtracts two positive integers", () => {
  expect(calculator.subtract(100, 50)).toBe(50)
})

it("subtracts two negative integers", () => {
  expect(calculator.subtract(-500, -500)).toBe(0)
})

it("subtracts a positive and a negative integer", () => {
  expect(calculator.subtract(-500, 500)).toBe(-1000)
})

it("subtracts two zeros", () => {
  expect(calculator.subtract(0, 0)).toBe(0)
})

it("subtracts a positive number and zero", () => {
  expect(calculator.subtract(50, 0)).toBe(50)
})

it("subtracts a negative number and zero", () => {
  expect(calculator.subtract(-35, 0)).toBe(-35)
})

it("subtracts a float and zero", () => {
  expect(calculator.subtract(-35.5, 0)).toBe(-35.5)
})

it("subtracts two small floating-point numbers", () => {
  expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1)
})

it("subtracts two very large numbers", () => {
  expect(calculator.subtract(1_000_000_000, 2_000_000_000)).toBe(-1_000_000_000)
})

it("subtracts a number from zero", () => {
  expect(calculator.subtract(0, 5)).toBe(-5)
})

it("subtracts a negative number from zero", () => {
  expect(calculator.subtract(0, -5)).toBe(5)
})

it("multiplies a number by one", () => {
  expect(calculator.multiply(42, 1)).toBe(42)
})

it("multiplies a number by negative one", () => {
  expect(calculator.multiply(32, -1)).toBe(-32)
})

it("multiplies two positive integers", () => {
  expect(calculator.multiply(100, 50)).toBe(5000)
})

it("multiplies two negative integers", () => {
  expect(calculator.multiply(-500, -500)).toBe(250000)
})

it("multiplies a positive and a negative integer", () => {
  expect(calculator.multiply(-10, 10)).toBe(-100)
})

it("multiplies a number by zero", () => {
  expect(calculator.multiply(99, 0)).toBe(0)
})

it("multiplies zero by a positive number", () => {
  expect(calculator.multiply(0, 100)).toBe(0)
})

it("multiplies a negative number and zero", () => {
  expect(calculator.multiply(-35, 0)).toBeCloseTo(0)
})

it("multiplies a float and zero", () => {
  expect(calculator.multiply(35.5, 0)).toBeCloseTo(0)
})

it("multiplies two small floating-point numbers", () => {
  expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02)
})

it("multiplies positive zero and negative zero", () => {
  expect(calculator.multiply(-0, 0)).toBeCloseTo(0)
})

it("multiplies two very large numbers", () => {
  expect(calculator.multiply(1_000_000, 2_000_000)).toBe(2_000_000_000_000)
})
