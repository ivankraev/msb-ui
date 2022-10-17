import { formatSize } from '@msp/utils/size-format'

it('should format the file in kb correctly', () => {
  const mockFile = {
    name: 'testName',
    size: 26000,
    downloadUrl: 'test',
  }

  formatSize(mockFile)

  expect(mockFile.size).toBe('25.4kb')
})

it('should format the file in mb correctly', () => {
  const mockFile = {
    name: 'testName',
    size: 2600000,
    downloadUrl: 'test',
  }

  formatSize(mockFile)

  expect(mockFile.size).toEqual('2.5Mb')
})
