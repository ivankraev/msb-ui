import React, { useCallback, useMemo } from 'react'
import { useAppSelector } from '@msp/redux/hooks'
import { trainingsActions } from '@msp/features/trainings/trainingsSlice'
import { useGetProductsWithTrainingsQuery } from '@msp/features/api/trainingsApiSlice'
import Container from '@common/Container'
import InnerContainer from '@common/UserSettings/components/Container'
import VideoComponent from './components/VideoComponent'
import TabsCard from './components/TabsCard'
import EmptyStateComponent from '@common/EmptyState'
import s from './Training.scss'
import LoadingComponent from '@common/LoadingComponent'

const TrainingsComponent = () => {
  const { productValue } = useAppSelector((state) => state.trainings)
  const { changeSelectedProduct } = trainingsActions()
  const { data: productsWithTrainings, isFetching } = useGetProductsWithTrainingsQuery()

  const products = useMemo(() => {
    return productsWithTrainings?.map((product) => ({
      value: product.value,
      name: product.name,
    }))
  }, [productsWithTrainings])

  const productTrainings = useMemo(() => {
    return productsWithTrainings?.find((product) => product.value === productValue)?.trainings
  }, [productsWithTrainings, productValue])

  const onSelectTabHandler = useCallback((value: string) => {
    changeSelectedProduct(value)
  }, [])

  if (isFetching) {
    return (
      <Container label="Secure MSP Hub YouTube" styles={s.container}>
        <LoadingComponent message="Your trainings are loading" />
      </Container>
    )
  }

  if (!products || !productsWithTrainings?.length === 0) {
    return (
      <Container label="Secure MSP Hub YouTube" styles={s.container}>
        <EmptyStateComponent message="You don't have any trainings" />
      </Container>
    )
  }

  return (
    <Container label="Secure MSP Hub YouTube" styles={s.container}>
      <InnerContainer>
        <TabsCard
          products={products}
          selectedProductValue={productValue}
          onSelectTabHandler={onSelectTabHandler}
        />
        {productTrainings?.map((training) => (
          <VideoComponent title={training.name} srcUrl={training.srcUrl} key={training.id} />
        ))}
      </InnerContainer>
    </Container>
  )
}

export default TrainingsComponent
