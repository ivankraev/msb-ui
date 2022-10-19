import React from 'react'
import { Service } from '@msp/shared/interfaces/plans.interface'
import s from './ServiceTable.scss'

interface Props {
  services: Service[]
  planName: string
}

const ServiceTable = ({ services, planName }: Props) => {
  return (
    <table className={s.container}>
      <tbody>
        <tr>
          <td>Plan</td>
          <td>{planName}</td>
        </tr>
        {services.map((svc) => (
          <>
            <tr>
              <td className={s.strong}>{svc.title}</td>
            </tr>
            <tr>
              <td>Package</td>
              <td>{svc.packageOptions.selectedOption.title}</td>
            </tr>
            <tr>
              <td>Policy</td>
              <td>{svc.policies.selectedOption.title}</td>
            </tr>
            <tr>
              <td>Seats</td>
              <td>{svc.seats.value}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  )
}

export default ServiceTable
