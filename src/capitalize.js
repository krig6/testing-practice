export const capitalize = (word) => {
  let firstChar = word.charAt(0)

  if (!/[a-zA-Z]/.test(firstChar)) {
    return word
  }

  return firstChar.toUpperCase() + word.slice(1)
}
