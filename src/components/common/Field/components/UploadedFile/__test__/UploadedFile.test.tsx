import React from 'react'
import UploadedFile from '@common/Field/components/UploadedFile'
import { render } from '@testing-library/react'

const fileName = 'sample.pdf'
const mockedFile = new File(['Rough Draft ....'], fileName, {
  type: 'application/pdf',
  lastModified: 1666120679296,
})

describe('UploadedFile component', () => {
  it('Should return string if file doesnt exist', () => {
    global.URL.createObjectURL = jest.fn()
    const { getByText } = render(<UploadedFile file={mockedFile} />)
    const fileNameElement = getByText(fileName)
    expect(fileNameElement).toBeVisible()
  })
})
