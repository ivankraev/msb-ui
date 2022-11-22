import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import Videos from '../Videos'
import { renderWithProviders } from '@msp/utils/test-utils'

const preloadedState = {
  trainings: {
    productValue: 'umbrella',
  },
}

jest.mock('@msp/features/api/trainingsApiSLice', () => ({
  _esModule: true,
  useGetProductsWithTrainingsQuery: jest.fn(() => ({
    data: [
      {
        consoleUrl: 'fakeConsoleUrl',
        createdAt: '2022-11-02T09:36:34.629Z',
        id: '45dd737f-ea78-4bca-957f-a87c6f6cb73a',
        logoUrl: 'https://url.png',
        name: 'Umbrella',
        value: 'umbrella',
        shortName: null,
        totalCustomers: '138',
        trainings: [
          {
            createdAt: '2022-11-02T09:36:34.826Z',
            id: '436580eb-42d9-4c2d-b8b0-83605c751506',
            name: 'How Cisco Umbrella Works',
            productId: '45dd737f-ea78-4bca-957f-a87c6f6cb73a',
            srcUrl: 'srcUrl',
            updatedAt: '2022-11-02T09:36:34.826Z',
          },
        ],
      },
      {
        consoleUrl: 'fakeConsoleUrl',
        createdAt: '2022-11-02T09:36:34.629Z',
        id: '45dd737f-ea78-4bca-957f-a87c6f6cb732',
        logoUrl: 'https://url.png',
        name: 'SecureX',
        value: 'secureX',
        shortName: null,
        totalCustomers: '138',
        trainings: [
          {
            createdAt: '2022-11-02T09:36:34.826Z',
            id: '436580eb-42d9-4c2d-b8b0-83605c751506',
            name: 'How Cisco SecureX Works',
            productId: '45dd737f-ea78-4bca-957f-a87c6f6cb73a',
            srcUrl: 'SecureXUrl',
            updatedAt: '2022-11-02T09:36:34.826Z',
          },
        ],
      },
    ],
  })),
}))

describe('Training component', () => {
  it('Should render Training page', () => {
    renderWithProviders(<Videos />, { preloadedState })
    const tabsCard = screen.getByTestId('tabs-card')
    const videoComponent = screen.queryAllByTestId('video-component')
    expect(tabsCard.children).toHaveLength(2)
    expect(videoComponent.length > 0).toBeTruthy()
  })

  it('Should change active tab on click', () => {
    renderWithProviders(<Videos />, { preloadedState })
    const tab = screen.getByTestId('tabs-card')
    fireEvent.click(tab.children[1])
    const frame = screen.getByTestId('video-frame')
    expect(frame.getAttribute('src')?.includes('SecureXUrl')).toBeTruthy()
  })
})
