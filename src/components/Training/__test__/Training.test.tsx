import React from 'react'
import { screen } from '@testing-library/react'
import Training from '../TrainingsComponent'
import VideoComponent from '../components/VideoComponent'
import { renderWithProviders } from '@msp/utils/test-utils'
import store from '@msp/redux/store'
import { getVideos } from '@msp/features/trainings/trainingsSlice'

const preloadedState = {
  trainings: {
    productName: 'Mock name',
    videos: [{ id: 1, title: 'MockTitle', youtubeID: 'MockyoutubeID' }],
  },
}

describe('Training component', () => {
  it('Should render Training page', () => {
    renderWithProviders(<Training />, { preloadedState })
    const tabsCard = screen.getByTestId('tabs-card')
    const videoComponent = screen.queryAllByTestId('video-component')
    expect(tabsCard.children).toHaveLength(5)
    expect(videoComponent.length > 0).toBeTruthy()
  })

  it('Should update state on fulfilled thunk', async () => {
    await store.dispatch(getVideos('Secure Endpoint'))
    expect(store.getState().trainings).not.toEqual(preloadedState.trainings)
  })

  it('Should video component', () => {
    const title = 'Test title'
    const youtubeID = 'testID'
    renderWithProviders(<VideoComponent title={title} youtubeID={youtubeID} />)
    const frame = screen.getByTitle(title)
    expect(frame.getAttribute('src')?.includes(youtubeID)).toBeTruthy()
  })
})
