import React, { useMemo } from 'react'
import { COLUMNS, MOCK_DATA } from './config'
import CustomTable from '@msp/components/common/CustomTable'
import SubSidebar from '@msp/components/common/SubSidebar'
import s from '@msp/components/Billing/Invoices/Invoices.scss'

const Invoices = () => {
  const data = useMemo(() => MOCK_DATA, [MOCK_DATA])
  const columns = useMemo(() => COLUMNS, [])

  return (
    <div className={s.container}>
      <SubSidebar />
      <CustomTable columns={columns} data={data} />
    </div>
  )
}

export default Invoices
