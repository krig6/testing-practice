export const capitalize = (word) => {
  if (typeof word === 'number') {
    throw new TypeError('capitalize: input must be a string')
  } else if (typeof word === 'boolean') {
    throw new TypeError('capitalize: input must be a non-boolean string')
  } else if (Array.isArray(word)) {
    throw new TypeError('capitalize: input must not be an array')
  } else if (word === '') {
    throw new TypeError('capitalize: input must be a non-empty string')
  } else if (word == null) {
    throw new TypeError('capitalize: input must be a non-null string')
  }

  let firstChar = word.charAt(0)

  if (!/[a-zA-Z]/.test(firstChar)) {
    return word
  }

  return firstChar.toUpperCase() + word.slice(1)
}
