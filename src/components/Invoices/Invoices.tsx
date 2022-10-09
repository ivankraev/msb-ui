import React, { useMemo } from 'react'
import { COLUMNS, MOCK_DATA } from './config'
import CustomTable from '@msp/components/CustomTable'

const Invoices = () => {
  const data = useMemo(() => MOCK_DATA, [MOCK_DATA])
  const columns = useMemo(() => COLUMNS, [])

  return (
    <>
      <CustomTable columns={columns} data={data} />
    </>
  )
}

export default Invoices
