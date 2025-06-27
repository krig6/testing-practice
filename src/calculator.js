import { createErrorMessage, validateInput } from './utils/validateInput';

class Calculator {
  add(x, y) {
    validateInput('calculator', x, 'number');
    validateInput('calculator', y, 'number');
    return x + y;
  }

  subtract(x, y) {
    validateInput('calculator', x, 'number');
    validateInput('calculator', y, 'number');
    return x - y;
  }

  multiply(x, y) {
    validateInput('calculator', x, 'number');
    validateInput('calculator', y, 'number');
    return x * y;
  }

  divide(x, y) {
    validateInput('calculator', x, 'number');
    validateInput('calculator', y, 'number');
    if (Object.is(y, 0)) {
      throw new Error(createErrorMessage('calculator', 'zero', 'number'));
    }
    return x / y;
  }
}

export default Calculator;
