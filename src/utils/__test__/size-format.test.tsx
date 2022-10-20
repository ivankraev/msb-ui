import { formatSize } from '@msp/utils/size-format'

it('should format the file in kb correctly', () => {
  const size = formatSize(235572)
  expect(size).toBe('230.1kb')
})

it('should format the file in mb correctly', () => {
  const size = formatSize(2355723)

  expect(size).toEqual('2.3Mb')
})
