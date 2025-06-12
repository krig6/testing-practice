export const reverseString = (str) => {
  if (typeof str === 'undefined') {
    throw new TypeError('reverseString: expected string, received undefined')
  }
  if (str === null) {
    throw new TypeError('reverseString: expected string, received null')
  }
  return str.split('').reverse().join('')
}


