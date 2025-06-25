export const analyzeArray = (arr) => {
  const length = arr.length
  const sum = arr.reduce((acc, curr) => acc + curr, 0)
  const average = sum / length
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return { average, min, max, length }
}
