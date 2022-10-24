import React, { useCallback } from 'react'
import { useAppDispatch } from '@msp/redux/hooks'
import { useAppSelector } from '@msp/redux/hooks'
import { trainingsActions, getVideos } from '@msp/features/trainings/trainingsSlice'
import Container from '@common/Container'
import InnerContainer from '@common/UserSettings/components/Container'
import VideoComponent from './components/VideoComponent'
import TabsCard from './components/TabsCard'
import s from './Training.scss'

const TrainingsComponent = () => {
  const dispatch = useAppDispatch()
  const { productName, videos } = useAppSelector((state) => state.trainings)

  const { changeProduct } = trainingsActions()

  const onSelectTabHandler = useCallback((productName: string) => {
    changeProduct(productName)
    dispatch(getVideos(productName))
  }, [])

  return (
    <Container label="Secure MSP Hub YouTube" styles={s.container}>
      <InnerContainer>
        <TabsCard onSelectTabHandler={onSelectTabHandler} selectedProductName={productName} />
        {videos?.map((video) => (
          <VideoComponent title={video.title} youtubeID={video.youtubeID} key={video.id} />
        ))}
      </InnerContainer>
    </Container>
  )
}

export default TrainingsComponent
