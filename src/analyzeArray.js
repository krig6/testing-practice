export const analyzeArray = (arr) => {
  const length = arr.length
  const sum = arr.reduce((acc, curr) => acc + curr, 0)
  const average = Number((sum / length).toFixed(2))
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return { average, min, max, length }
}
