export const caesarCipher = (str, shift) => {
  const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'

  const result = []
  const effectiveShift = ((shift % 26) + 26) % 26

  for (let char of str) {
    if (LOWERCASE_LETTERS.includes(char)) {
      result.push(LOWERCASE_LETTERS[(LOWERCASE_LETTERS.indexOf(char) + effectiveShift) % 26])
    }
  }

  return result.join('')
}
