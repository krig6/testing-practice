export const reverseString = (str) => {
  if (typeof str === 'undefined') {
    throw new TypeError('reverseString: expected string, received undefined')
  }
  return str.split('').reverse().join('')
}


