export const formatSize = (size: number): string => {
  let ext = 'kb'
  // size in kb
  let resultSize = size / 1024
  // size in mb
  if (resultSize > 1000) {
    resultSize = resultSize / 1000
    ext = 'Mb'
  }

  return `${resultSize.toFixed(1)}${ext}`
}
