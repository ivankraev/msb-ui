import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import NavbarPeriod from '@common/SubSidebar/components/NavbarPeriod'

describe('NavbarPeriod component', () => {
  it('proper class should be applied to the selected item', () => {
    interface Period {
      label: string
      value: string
      icon: () => JSX.Element
    }
    ;[]
    const periods: Period[] = [
      { label: 'Last Day', value: 'lastDay', icon: () => <h1>noIcon</h1> },
      { label: 'Today', value: 'today', icon: () => <h1>noIcon</h1> },
      { label: 'Last Week', value: 'lastWeek', icon: () => <h1>noIcon</h1> },
    ]
    render(<NavbarPeriod periods={periods} />)
    const selectedItem = screen.getByText('Today')
    fireEvent.click(selectedItem)
    const items = screen.getAllByRole('listitem')
    expect(items[1]).toHaveClass('activeMenuItem')
  })
})
