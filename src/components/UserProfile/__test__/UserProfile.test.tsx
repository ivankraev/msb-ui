import React from 'react'
import { renderWithProviders } from '@msp/utils/test-utils'
import UserProfile from '@msp/components/UserProfile/UserProfile'
import { fireEvent, waitFor } from '@testing-library/react'

const preloadedState = {
  user: {
    userInfo: {
      name: 'Test name',
      sub: 'test',
      email: 'test email',
      zoneinfo: 'test',
    },
    token: 'testToken',
  },
}

describe('UserProfile component', () => {
  it('Should render the correct content provided by the store', () => {
    const { container } = renderWithProviders(<UserProfile />, { preloadedState })
    expect(container.querySelectorAll('input')[0].value).toBe(preloadedState.user.userInfo.name)
  })
  it('Should change value in input', async () => {
    const { getByText, queryByLabelText } = renderWithProviders(<UserProfile />, {
      preloadedState,
    })
    const buttonEdit = getByText('Edit info')
    buttonEdit && fireEvent.click(buttonEdit)
    await waitFor(() => {
      const buttonSave = getByText('Save')
      expect(buttonSave).toBeInTheDocument()
      const input = queryByLabelText('Name')
      fireEvent.change(input, { target: { value: 'Test name updated' } })
      buttonSave && fireEvent.click(buttonSave)
      expect(input).toHaveValue('Test name updated')
    })
  })
})
