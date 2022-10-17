import { CertFile } from '@msp/shared/interfaces/certfile.interface'

export const formatSize = (file: CertFile): void => {
  let ext = 'kb'
  // size in kb
  let size = Number(file.size) / 1024
  // size in mb
  if (size > 1000) {
    size = size / 1000
    ext = 'Mb'
  }

  file.size = `${size.toFixed(1)}${ext}`
}
