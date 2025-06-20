import { validateInput } from "./utils/validateInput"

export const reverseString = (str) => {
  validateInput('reverseString', str)

  return str.split('').reverse().join('')
}
