export const validateInput = (func, str) => {
  switch (func) {
    case 'capitalize':
    case 'reverseString':
      if (typeof str === 'undefined') {
        throw new TypeError(createErrorMessage(func, 'undefined'))
      }
      if (str === null) {
        throw new TypeError(createErrorMessage(func, 'null'))
      }
      if (str === '') {
        throw new TypeError(createErrorMessage(func, 'empty'))
      }
      if (Array.isArray(str)) {
        throw new TypeError(createErrorMessage(func, 'array'))
      }
      if (typeof str !== 'string') {
        throw new TypeError(createErrorMessage(func, typeof str))
      }
      break
    case 'calculator':
      if (typeof str !== 'number') {
        throw new TypeError(createErrorMessage(func, typeof str))
      }
      break
  }
}

export const createErrorMessage = (func, inputType) => {
  const errorMessages = {
    'number': `${func}: expected string, received number`,
    'boolean': `${func}: expected string, received boolean`,
    'object': `${func}: expected string, received object`,
    'null': `${func}: expected string, received null`,
    'undefined': `${func}: expected string, received undefined`,
    'array': `${func}: expected string, received array`,
    'empty': `${func}: expected non-empty string`,
    'string': `${func}: expected number, received string`,
    'zero': `${func}: expected non-zero divisor`
  }

  return errorMessages[inputType] || `${func}: unexpected input type`
}


