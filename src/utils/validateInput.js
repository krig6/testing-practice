export const validateInput = (funcName, input, expected) => {
  const type = typeof input;
  if (type === 'undefined') {
    throw new TypeError(createErrorMessage(funcName, 'undefined', expected));
  }
  if (input === null) {
    throw new TypeError(createErrorMessage(funcName, 'null', expected));
  }
  if (Array.isArray(input)) {
    throw new TypeError(createErrorMessage(funcName, 'array', expected));
  }
  if (input === '') {
    throw new TypeError(createErrorMessage(funcName, 'empty', expected));
  }

  switch (expected) {
    case 'string':
      validateString(funcName, type);
      break;
    case 'number':
      validateNumber(funcName, type);
      if (Number.isNaN(input)) {
        throw new TypeError(createErrorMessage(funcName, 'isNaN', expected));
      }
      break;
  }
};

const validateString = (funcName, type) => {
  if (type !== 'string') {
    throw new TypeError(createErrorMessage(funcName, type, 'string'));
  }
};

const validateNumber = (funcName, type) => {
  if (type !== 'number') {
    throw new TypeError(createErrorMessage(funcName, type, 'number'));
  }
};

export const createErrorMessage = (funcName, inputType, expected) => {
  const errorMessages = {
    'number': `${funcName}: expected ${expected}, received number`,
    'string': `${funcName}: expected ${expected}, received string`,
    'boolean': `${funcName}: expected ${expected}, received boolean`,
    'object': `${funcName}: expected ${expected}, received object`,
    'null': `${funcName}: expected ${expected}, received null`,
    'undefined': `${funcName}: expected ${expected}, received undefined`,
    'array': `${funcName}: expected ${expected}, received array`,
    'empty': `${funcName}: expected non-empty input`,
    'zero': `${funcName}: expected non-zero divisor`,
    'isNaN': funcName === 'caesarCipher'
      ? `${funcName}: shift expected to be a valid number`
      : `${funcName}: expected number, received NaN`
  };

  return errorMessages[inputType] || `${funcName}: unexpected input type`;
};
