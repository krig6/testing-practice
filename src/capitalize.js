export const capitalize = (str) => {
  validateInput(str)

  const firstChar = str.charAt(0)
  return !/[a-zA-Z]/.test(firstChar)
    ? str
    : firstChar.toUpperCase() + str.slice(1)
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
    'number': 'capitalize: expected string, received number',
    'boolean': 'capitalize: expected string, received boolean',
    'object': 'capitalize: expected string, received object',
    'null': 'capitalize: expected string, received null',
    'undefined': 'capitalize: expected string, received undefined',
    'array': 'capitalize: expected string, received array',
    'empty': 'capitalize: expected non-empty string'
  }

  return errorMessages[inputType] || 'capitalize: unexpected input type'
}


