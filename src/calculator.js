import { validateInput, createErrorMessage } from "./utils/validateInput"

class Calculator {
  add(x, y) {
    validateInput('calculator', x)
    validateInput('calculator', y)
    return x + y
  }

  subtract(x, y) {
    validateInput('calculator', x)
    validateInput('calculator', y)
    return x - y
  }

  multiply(x, y) {
    validateInput('calculator', x)
    validateInput('calculator', y)
    return x * y
  }

  divide(x, y) {
    validateInput('calculator', x)
    validateInput('calculator', y)

    if (Object.is(y, 0)) {
      throw new Error(createErrorMessage('calculator', 'zero'))
    }
    return x / y
  }
}

export default Calculator
