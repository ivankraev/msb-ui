import React from 'react'
import cx from 'classnames'
import s from '../Training.scss'
import { ProductResult } from '@msp/features/api/types'

interface Props {
  onSelectTabHandler: (productValue: string) => void
  selectedProductValue: string
  products: Pick<ProductResult, 'name' | 'value'>[]
}

const TabsCard = ({ products, selectedProductValue, onSelectTabHandler }: Props) => {
  return (
    <div className={s.tabsCard} data-testid="tabs-card">
      {products.map((product) => (
        <div
          className={selectedProductValue === product.value ? cx(s.tab, s.active) : s.tab}
          key={product.value}
          onClick={() => onSelectTabHandler(product.value)}
        >
          {product.name}
        </div>
      ))}
    </div>
  )
}

export default TabsCard
