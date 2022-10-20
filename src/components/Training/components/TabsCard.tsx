import React from 'react'
import cx from 'classnames'
import s from '../Training.scss'
import MOCK_DATA from '@msp/mocks/products.json'

interface Props {
  onSelectTabHandler: (productName: string) => void
  selectedProductName: string
}

const TabsCard = ({ onSelectTabHandler, selectedProductName }: Props) => {
  const products = MOCK_DATA.data.map((p) => p.productName)
  return (
    <div className={s.tabsCard} data-testid="tabs-card">
      {products.map((product) => (
        <div
          className={selectedProductName === product ? cx(s.tab, s.active) : s.tab}
          key={product}
          onClick={() => onSelectTabHandler(product)}>
          {product}
        </div>
      ))}
    </div>
  )
}

export default TabsCard
