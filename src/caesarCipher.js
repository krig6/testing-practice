export const caesarCipher = (str, shift) => {
  if (typeof str === 'undefined') {
    throw new TypeError('caesarCipher: expected string, received undefined')
  }
  if (str === null) {
    throw new TypeError('caesarCipher: expected string, received null')
  }
  if (Array.isArray(str)) {
    throw new TypeError('caesarCipher: expected string, received array')
  }
  if (typeof str === 'object') {
    throw new TypeError('caesarCipher: expected string, received object')
  }
  if (typeof str === 'boolean') {
    throw new TypeError('caesarCipher: expected string, received boolean')
  }
  if (typeof str === 'number') {
    throw new TypeError('caesarCipher: expected string, received number')
  }
  if (str === '') {
    throw new TypeError('caesarCipher: expected non-empty input')
  }

  const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'

  const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const result = []
  const effectiveShift = ((shift % 26) + 26) % 26

  for (let char of str) {
    if (LOWERCASE_LETTERS.includes(char)) {
      result.push(LOWERCASE_LETTERS[(LOWERCASE_LETTERS.indexOf(char) + effectiveShift) % 26])
    }
    if (UPPERCASE_LETTERS.includes(char)) {
      result.push(UPPERCASE_LETTERS[(UPPERCASE_LETTERS.indexOf(char) + effectiveShift) % 26])
    }
    if (!UPPERCASE_LETTERS.includes(char) && !LOWERCASE_LETTERS.includes(char)) {
      result.push(char)
    }
  }

  return result.join('')
}
