export const reverseString = (str) => {
  validateInput(str)

  return str.split('').reverse().join('')
}

const validateInput = (str) => {
  if (typeof str === 'undefined') {
    throw new TypeError(createErrorMessage('undefined'))
  }
  if (str === null) {
    throw new TypeError(createErrorMessage('null'))
  }
  if (str === '') {
    throw new TypeError(createErrorMessage('empty'))
  }
  if (Array.isArray(str)) {
    throw new TypeError(createErrorMessage('array'))
  }
  if (typeof str !== 'string') {
    throw new TypeError(createErrorMessage(typeof str))
  }
}

const createErrorMessage = (inputType) => {
  const errorMessages = {
    'number': 'reverseString: expected string, received number',
    'boolean': 'reverseString: expected string, received boolean',
    'object': 'reverseString: expected string, received object',
    'null': 'reverseString: expected string, received null',
    'undefined': 'reverseString: expected string, received undefined',
    'array': 'reverseString: expected string, received array',
    'empty': 'reverseString: expected non-empty string'
  }

  return errorMessages[inputType] || 'reverseString: unexpected input type'
}

