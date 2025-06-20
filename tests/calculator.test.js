import Calculator from "../src/calculator"

const calculator = new Calculator()

describe("basic arithmetic operations", () => {
  it("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5)
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3)
  })

  it("subtracts two numbers", () => {
    expect(calculator.subtract(10, 3)).toBe(7)
    expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1)
  })

  it("multiplies two numbers", () => {
    expect(calculator.multiply(4, 5)).toBe(20)
    expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02)
  })

  it("divides two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5)
    expect(calculator.divide(0.3, 0.1)).toBeCloseTo(3)
  })
})

describe("mathematical edge cases", () => {
  it("divides a number by -1", () => {
    expect(calculator.divide(50, -1)).toBe(-50)
  })

  it("returns 0 when 0 is divided by a number", () => {
    expect(calculator.divide(0, 100)).toBe(0)
  })

  it("returns -0 when -0 is divided by a positive number", () => {
    expect(Object.is(calculator.divide(-0, 100), -0)).toBe(true)
  })
})

describe("invalid inputs", () => {
  describe("invalid argument types", () => {
    it("throws if non-number is passed to add", () => {
      expect(() => calculator.add(100, 'tiger')).toThrow("calculator: expected number, received string")
    })

    it("throws if boolean is passed to multiply", () => {
      expect(() => calculator.multiply(true, 5)).toThrow("calculator: expected number, received boolean")
    })

    it("throws if array is passed to add", () => {
      expect(() => calculator.add(['not', 'a', 'string'])).toThrow("calculator: expected number, received array")
    })

    it("throws if object is passed to divide", () => {
      expect(() => calculator.divide({ framework: 'React' })).toThrow("calculator: expected number, received object")
    })
  })

  describe("invalid input values", () => {
    it("throws if null is passed to subtract", () => {
      expect(() => calculator.subtract(null, 5)).toThrow("calculator: expected number, received null")
    })

    it("throws if undefined is passed to divide", () => {
      expect(() => calculator.divide(10, undefined)).toThrow("calculator: expected number, received undefined")
    })

    it("throws if empty string is passed to divide", () => {
      expect(() => calculator.divide('')).toThrow("calculator: expected non-empty input")
    })

    it("throws when dividing by zero", () => {
      expect(() => calculator.divide(99, 0)).toThrow("calculator: expected non-zero divisor")
    })
  })
})
