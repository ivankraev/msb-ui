import React, { useMemo } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { links } from '@msp/routes/links'
import {
  COLUMNS,
  sortOptions,
  filterOptions,
} from '@msp/components/Products/components/Plans/config'
import { useGetPlansQuery } from '@msp/features/api/planApiSlice'
import { plansActions } from '@msp/features/plans/plansSlice'
import { useAppSelector } from '@msp/redux/hooks'
import { useDebounce } from '@msp/hooks/useDebounce'
import CustomTable from '@common/CustomTable'
import InputSelect from '@common/InputSelect'
import Container from '@common/Container'
import SearchBar from '@common/SearchBar'
import Prefetch from './Prefetch'
import Button from '@common//Button'
import EmptyStateComponent from '@common/EmptyState'
import s from './Plans.scss'

const Plans = () => {
  const {
    changeResultsPerPage,
    changeSearchBy,
    changeOrderBy,
    changeCurrentPage,
    changeSearchText,
  } = plansActions()

  const { searchBy, orderBy, currentPage, limit, searchText } = useAppSelector(
    (state) => state.plans,
  )

  const debouncedSearchText = useDebounce<string>(searchText, 500)

  const { data, isFetching } = useGetPlansQuery({
    orderBy: orderBy.value,
    searchBy: searchBy.value,
    searchText: debouncedSearchText,
    skip: (currentPage - 1) * limit,
    limit,
  })

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const columnsData = useMemo(() => COLUMNS, [data])

  const goToNewPlan = () => {
    navigate(links.products.plans.new)
  }

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSearchText(e.target.value)
  }

  const totalPages = useMemo(
    () => Math.ceil(Number((data?.resultsCount as number) / limit)),
    [data, currentPage],
  )

  if (pathname !== links.products.plans.index) {
    return <Outlet />
  }

  return !isFetching && data?.data.length === 0 && debouncedSearchText === '' ? (
    <EmptyStateComponent
      btnName="Create new plan"
      message="You don't have any plans yet"
      cta={goToNewPlan}
    />
  ) : (
    <Container
      label="Plans"
      styles={s.container}
      headerButtons={
        <Button onClick={goToNewPlan} contained>
          Create new plan
        </Button>
      }
    >
      <Prefetch />
      <div className={s.innerContainer}>
        <div className={s.topTools}>
          <div className={s.searchBarHolder}>
            <SearchBar
              placeholder={'Search for plan'}
              onChange={searchHandler}
              defaultValue={searchText}
            />
            <div>
              <InputSelect
                styles={s.sortSelect}
                label=""
                options={filterOptions}
                onChangeHandler={(option) => {
                  changeSearchBy(option)
                }}
                value={searchBy}
              />
            </div>
          </div>
        </div>
        <div className={s.filterContainer}>
          <div className={s.topSummary}>{data?.data.length || 0} Plans</div>
          <InputSelect
            styles={s.sortSelect}
            label=""
            options={sortOptions}
            onChangeHandler={(option) => {
              changeOrderBy(option)
            }}
            value={orderBy}
          />
        </div>
        <CustomTable
          columns={columnsData}
          data={data?.data || []}
          styles={s.table}
          isLoading={isFetching}
          paginationProps={{
            currentPage,
            totalPages,
            resultsPerPage: limit,
            resultsCount: data?.resultsCount as number,
            onPageChange: changeCurrentPage,
            setResultsPerPage: changeResultsPerPage,
          }}
        />
      </div>
    </Container>
  )
}

export default Plans
