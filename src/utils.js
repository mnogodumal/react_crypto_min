export function percentDifference(a, b) {
  return (100 * Math.abs((a - b) / ((a + b) / 2)))
}

export function copitalize(str) {
  return (str.charAt(0).toUpperCase() + str.substring(1))
}