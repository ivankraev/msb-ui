import React from 'react'
import s from './InformationTable.scss'

interface Props {
  customerInfo: {
    organisation: string
    name: string
    email: string
    address: string
  }
}

const InformationTable = ({ customerInfo }: Props) => {
  const { organisation, name, email, address } = customerInfo

  return (
    <table className={s.container}>
      <tbody>
        <tr>
          <td>Organization name</td>
          <td>{organisation}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Customer email address</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>Billing Address</td>
          <td>{address}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default InformationTable
