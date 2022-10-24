import React from 'react'
import s from './ProductsContainer.scss'

interface Props {
  children: React.ReactNode
}

const ProductsContainer = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>
}

export default ProductsContainer
