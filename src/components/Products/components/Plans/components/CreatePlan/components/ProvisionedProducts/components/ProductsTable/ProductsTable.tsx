import React from 'react'
import { Product } from '@msp/shared/interfaces/plans.interface'
import s from './ProductsTable.scss'

interface Props {
  products: Product[]
  planName: string
}

const ProductsTable = ({ products, planName }: Props) => {
  return (
    <table className={s.container}>
      <tbody>
        <tr>
          <td>Plan</td>
          <td>{planName}</td>
        </tr>
        {products.map((prod) => (
          <React.Fragment key={prod.value}>
            <tr>
              <td className={s.strong}>{prod.title}</td>
            </tr>
            <tr>
              <td>Package</td>
              <td>{prod.package.title}</td>
            </tr>
            <tr>
              <td>Policy</td>
              <td>{prod.policy.title}</td>
            </tr>
            <tr>
              <td>Seats</td>
              <td>{prod.seats}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default ProductsTable
