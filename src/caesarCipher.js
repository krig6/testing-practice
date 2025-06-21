export const caesarCipher = (str, shift) => {
  const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'

  const result = []

  for (let char of str) {
    if (LOWERCASE_LETTERS.includes(char)) {
      result.push(LOWERCASE_LETTERS[(LOWERCASE_LETTERS.indexOf(char) + shift) % 26])
    }
  }

  return result.join('')
}


