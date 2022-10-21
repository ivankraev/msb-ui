export const isValidName = (name: string) => {
  if (name.length < 1 || name.length > 80) {
    return false
  }
  return true
}
