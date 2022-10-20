import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithProviders } from '@msp/utils/test-utils'
import MspSettings from '@msp/components/MspSettings/MspSettings'

const preloadedState = {
  settings: {
    mspName: 'Test Name',
    logo: 'test logo',
    certificate: {
      file: null,
      error: null,
    },
  },
}

describe('MspSettings component', () => {
  it('Should render the correct content provided by the store', () => {
    const { container } = renderWithProviders(<MspSettings />, { preloadedState })

    expect(container.querySelectorAll('input')[0].value).toBe(preloadedState.settings.mspName)
    expect(container.querySelector('h1')?.textContent).toBe('Msp Settings')
    expect(container.querySelector('img')?.src).toBe('http://localhost/test%20logo')
    expect(container.querySelector('strong')).not.toBeNull()
  })

  it('Should change the file succesfully with the proper format', async () => {
    const { getByTestId } = renderWithProviders(<MspSettings />, { preloadedState })

    global.URL.createObjectURL = jest.fn()

    const file = new File(['(⌐□_□)'], 'chucknorris.pdf', { type: 'application/pdf' })

    const uploader = getByTestId('file-uploader')

    fireEvent.change(uploader, { target: { files: [file] } })

    const imageInput = getByTestId('file-uploader')

    expect((imageInput as HTMLInputElement).files![0].name).toBe('chucknorris.pdf')
    expect((imageInput as HTMLInputElement).files![0].type).toBe('application/pdf')
    expect(global.URL.createObjectURL).toHaveBeenCalled()
  })

  it('Should not upload file with wrong format', async () => {
    const { getByTestId } = renderWithProviders(<MspSettings />, { preloadedState })

    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })

    global.URL.createObjectURL = jest.fn()

    const uploader = getByTestId('file-uploader')

    fireEvent.change(uploader, { target: { files: [file] } })
  })
})
