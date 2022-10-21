import React, { useState, useCallback } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { COLUMNS } from '@msp/components/Products/components/Plans/config'
import { Plan } from '@msp/components/Products/components//Plans/types'

import MOCK_DATA from '@msp/mocks/plans.json'
import CustomTable from '@common/CustomTable'
import Container from '@common/Container'
import SearchBar from '@common/SearchBar'
import SortSelector from '@common/Selector/SortSelector'
import FilterSelector from '@common/Selector/FilterSelector'
import Button from '@common//Button'

import s from './Plans.scss'
import { Column } from 'react-table'
import { links } from '@msp/routes/links'

enum filterEnum {
  products = 'products',
  plans = 'plans',
}

enum sortEnum {
  az = 'az',
  za = 'za',
}

const mockedPlans: Plan[] = MOCK_DATA.data
const mockedColumns: Column<Plan>[] = COLUMNS

const Plans = () => {
  const [plans, setPlans] = useState<Plan[]>(mockedPlans)
  const [columns, setColumns] = useState<Column<Plan>[]>(mockedColumns)
  const [filter, setFilter] = useState<string>(filterEnum.plans)

  const { pathname } = useLocation()

  const navigate = useNavigate()

  const searchByProducts = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value
      if (query === '') {
        setPlans(mockedPlans)
        setColumns(mockedColumns)
        return
      }

      const newColumns = columns.filter((c, index) => {
        if (index === 0 || index === columns.length - 1) return true
        return c.Header?.toString()?.toLowerCase().includes(query)
      })

      setColumns(newColumns)
    },
    [plans, mockedPlans, columns, mockedColumns],
  )

  const searchByPlans = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value
      if (query === '') {
        setPlans(mockedPlans)
        setColumns(mockedColumns)
        return
      }
      const newPlans = plans.filter((p) => {
        return p.subscribers.toString().includes(query) || p.plan.toLowerCase().includes(query)
      })

      setPlans(newPlans)
    },
    [plans, mockedPlans, columns, mockedColumns],
  )

  const onSearchHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (filter === filterEnum.products) {
        searchByProducts(e)
      } else {
        searchByPlans(e)
      }
    },
    [plans, mockedPlans, columns, mockedColumns],
  )

  const onSortHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      let sortedPlans
      if (e.target.value === sortEnum.az) {
        sortedPlans = [...plans].sort((a, b) => a.plan.localeCompare(b.plan))
      } else {
        sortedPlans = [...plans].sort((a, b) => b.plan.localeCompare(a.plan))
      }
      setPlans(sortedPlans)
    },
    [plans, mockedPlans, columns, mockedColumns],
  )

  const onFilterHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter(e.target.value)
    },
    [filter],
  )

  if (pathname !== links.products.plans.index) {
    return <Outlet />
  }

  const goToNewPlan = () => {
    navigate(links.products.plans.new)
  }

  return (
    <Container
      label="Plans"
      styles={s.container}
      headerButtons={
        <Button onClick={goToNewPlan} contained>
          Create new plan
        </Button>
      }
    >
      <div className={s.innerContainer}>
        <div className={s.topTools}>
          <div className={s.searchBarHolder}>
            <SearchBar placeholder={'Plan name'} onChange={onSearchHandler} />
            <FilterSelector onChange={onFilterHandler} className={s.filterSelect} />
          </div>
        </div>
        <div className={s.filterContainer}>
          <div className={s.topSummary}>{plans.length} Plans</div>
          <SortSelector onChange={onSortHandler} className={s.sortSelect} />
        </div>
        <CustomTable columns={columns} data={plans} />
      </div>
    </Container>
  )
}

export default Plans
