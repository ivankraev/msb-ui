import { useEffect } from 'react'
import { useAppDispatch } from '@msp/redux/hooks'
import { productApiSlice } from '@msp/features/api/productApiSlice'

const Prefetch = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const products = dispatch(productApiSlice.endpoints.getProducts.initiate())

    return () => {
      products.unsubscribe()
    }
  }, [])

  return null
}

export default Prefetch
