class Calculator {

  add(x, y) {
    return x + y
  }

  subtract(x, y) {
    return x - y
  }

  multiply(x, y) {
    return x * y
  }

  divide(x, y) {
    if (Object.is(y, 0)) {
      throw new Error("Cannot divide by zero")
    }
    return x / y
  }
}

export default Calculator
