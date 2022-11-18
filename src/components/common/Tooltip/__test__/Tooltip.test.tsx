import React from 'react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tooltip from '@common/Tooltip'

describe('Tooltip component', () => {
  it('Should display tooltip on mouse enter and should hide it on mouse leave', async () => {
    const mockHeaderText = 'My Header'
    const mockTooltipText = 'test tooltip text'

    const { queryByText, getByText } = render(
      <Tooltip text={mockTooltipText}>
        <h1>{mockHeaderText}</h1>
      </Tooltip>,
    )
    userEvent.hover(getByText(mockHeaderText))
    await waitFor(() => expect(getByText(mockTooltipText)).toBeVisible())
    userEvent.unhover(getByText(mockHeaderText))
    await waitFor(() => expect(queryByText(mockTooltipText)).toBeNull())
  })
})
