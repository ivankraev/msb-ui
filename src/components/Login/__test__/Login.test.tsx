import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../Login'

describe('Login component', () => {
  it('Should render the login', async () => {
    const testEmail = 'testEmail@email.com'

    const { container } = render(<Login />)
    const input = container.querySelector('input') as HTMLInputElement
    userEvent.type(input, testEmail)
    expect(input).toHaveValue(testEmail)
  })
})
