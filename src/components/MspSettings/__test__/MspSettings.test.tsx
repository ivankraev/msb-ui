import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithProviders } from '@msp/utils/test-utils'
import MspSettings from '@msp/components/MspSettings/MspSettings'

const mockedUserInfo = {
  name: 'Rebecca Rogers',
  email: 'rebecca@mail.com',
  organization: 'Dev Inc.',
  availableOrganizations: ['Deployment Ltd.'],
  sub: 'random sub',
  zoneinfo: 'LA',
  logo: 'randomLogo.png',
}

const preloadedState = {
  user: {
    userInfo: mockedUserInfo,
  },
}

describe('MspSettings component', () => {
  it('Should render the correct content provided by the store', () => {
    const { container } = renderWithProviders(<MspSettings />, { preloadedState })

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
