export const isValidNumber = (num: number) => {
  // should be integer and positive number
  if (!Number.isInteger(num) || num < 1) {
    return false
  }
  return true
}
