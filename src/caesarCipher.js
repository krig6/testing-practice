import { validateInput } from "./utils/validateInput"

export const caesarCipher = (str, shift) => {
  validateInput('caesarCipher', str, 'string')
  validateInput('caesarCipher', shift, 'number')

  const ALPHABET_LENGTH = 26
  const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'
  const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const result = []
  const effectiveShift = ((shift % ALPHABET_LENGTH) + ALPHABET_LENGTH) % ALPHABET_LENGTH

  for (let char of str) {
    const isLowerCase = LOWERCASE_LETTERS.includes(char)
    const isUpperCase = UPPERCASE_LETTERS.includes(char)

    if (!isLowerCase && !isUpperCase) {
      result.push(char)
    }
    else {
      result.push(isLowerCase
        ? LOWERCASE_LETTERS[(LOWERCASE_LETTERS.indexOf(char) + effectiveShift) % ALPHABET_LENGTH]
        : UPPERCASE_LETTERS[(UPPERCASE_LETTERS.indexOf(char) + effectiveShift) % ALPHABET_LENGTH]
      )
    }
  }

  return result.join('')
}
