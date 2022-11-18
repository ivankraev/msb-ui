import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'
import { renderWithProviders } from '@msp/utils/test-utils'
import Snackbar from '../Snackbar'

const preloadedState = {
  uiComponents: {
    snackBar: {
      show: true,
      severity: 'info',
      text: 'Snackbar test text',
    },
  },
}

describe('Snackbar', () => {
  it('Should render Snackbar', () => {
    const { getByText } = renderWithProviders(<Snackbar />, { preloadedState })
    expect(getByText('Snackbar test text')).toBeInTheDocument()
  })
  it('Should close Snackbar on close click', async () => {
    const { getByText, queryByTestId } = renderWithProviders(<Snackbar />, {
      preloadedState,
    })
    const cross = queryByTestId('cross')
    cross && fireEvent.click(cross)
    await waitFor(
      () => {
        expect(getByText('Snackbar test text')).not.toBeVisible()
      },
      { timeout: 1000 },
    )
  })
})
