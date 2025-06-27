import { validateInput } from "./utils/validateInput"

export const analyzeArray = (arr) => {
  if (arr.length === 0) {
    throw new Error("analyzeArray: array cannot be empty")
  }

  for (let element of arr) {
    validateInput('analyzeArray', element, 'number')
  }

  const length = arr.length
  const sum = arr.reduce((acc, curr) => acc + curr, 0)
  const average = Number((sum / length).toFixed(2))
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return { average, min, max, length }
}
