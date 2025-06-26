export const analyzeArray = (arr) => {
  if (arr.length <= 0) {
    throw new Error("analyzeArray: expected non-empty input")
  } else {

    for (let element of arr) {
      if (element === null) {
        throw new Error("analyzeArray: expected number, received null")
      }
      if (typeof element === 'undefined') {
        throw new Error("analyzeArray: expected number, received undefined")
      }
      if (typeof element === 'object') {
        throw new Error("analyzeArray: expected number, received object")
      }
      if (typeof element === 'boolean') {
        throw new Error("analyzeArray: expected number, received boolean")
      }
      if (typeof element === 'string') {
        throw new Error("analyzeArray: expected number, received string")
      }
      if (typeof element === 'number' && isNaN(element)) {
        throw new Error("analyzeArray: expected number, received NaN")
      }
    }
  }

  const length = arr.length
  const sum = arr.reduce((acc, curr) => acc + curr, 0)
  const average = Number((sum / length).toFixed(2))
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return { average, min, max, length }
}
