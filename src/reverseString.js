export const reverseString = (str) => {
  if (typeof str === 'undefined') {
    throw new TypeError('reverseString: expected string, received undefined')
  }
  if (str === null) {
    throw new TypeError('reverseString: expected string, received null')
  }
  if (str === '') {
    throw new TypeError('reverseString: expected non-empty string')
  }

  if (typeof str === 'number') {
    throw new TypeError('reverseString: expected string, received number')
  }
  return str.split('').reverse().join('')
}


