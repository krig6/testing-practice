export const capitalize = (word) => {
  if (word == null) {
    throw new TypeError('capitalize: input must be a non-null string')
  } else if (word === '') {
    throw new TypeError('capitalize: input must be a non-empty string')
  }

  let firstChar = word.charAt(0)

  if (!/[a-zA-Z]/.test(firstChar)) {
    return word
  }

  return firstChar.toUpperCase() + word.slice(1)
}
