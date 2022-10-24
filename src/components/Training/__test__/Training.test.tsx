import React from 'react'
import { screen } from '@testing-library/react'
import Training from '@msp/components/Training/TrainingsComponent'
import VideoComponent from '../components/VideoComponent'
import { renderWithProviders } from '@msp/utils/test-utils'

describe('Training component', () => {
  it('Should render Training page', () => {
    renderWithProviders(<Training />)
    const tabsCard = screen.getByTestId('tabs-card')
    const videoComponent = screen.queryAllByTestId('video-component')
    expect(tabsCard.children).toHaveLength(5)
    expect(videoComponent.length > 0).toBeTruthy()
  })

  it('Should video component', () => {
    const title = 'Test title'
    const youtubeID = 'testID'
    renderWithProviders(<VideoComponent title={title} youtubeID={youtubeID} />)
    const frame = screen.getByTitle(title)
    expect(frame.getAttribute('src')?.includes(youtubeID)).toBeTruthy()
  })
})
