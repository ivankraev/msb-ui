import React, { useCallback, useMemo } from 'react'
import { debounce } from 'lodash'
import { productsActions } from '@msp/features/plans/productsSlice'
import { useAppSelector } from '@msp/redux/hooks'
import { Product } from '@msp/shared/interfaces/plans.interface'
import { SelectOption } from '@msp/shared/interfaces/select-option.interface'
import ProductsContainer from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts/components/ProductsContainer'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import Accordion from '@common/Accordion'
import CheckboxItem from '@common/CheckboxItem'
import InputSelect from '@common/InputSelect'
import InputContainer from '@common/InputContainer'
import SimpleInput from '@common/SimpleInput'
import s from './SelectProducts.scss'

interface Props {
  headerButton?: React.ReactNode
}

const SelectProducts = ({ headerButton }: Props) => {
  const { changeSelectedProducts, changeSelectedOption, selectSeats, selectPlan } =
    productsActions()
  const { products, selectedPlanName } = useAppSelector((state) => state.plans)

  const Header = (product: Product) => (
    <CheckboxItem
      label={product.title}
      checked={product.selected}
      strong={true}
      onClick={useCallback(() => changeSelectedProducts(product), [])}
    />
  )

  const selectSeatsHandler = debounce(
    (accessor: string, event: React.ChangeEvent<HTMLInputElement>) => {
      selectSeats({ accessor, value: Number(event.target.value) })
    },
    300,
  )

  const selectPlanHandler = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    selectPlan(event.target.value)
  }, 300)

  const memoSelectPlanHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => selectPlanHandler(event),
    [],
  )

  const memoChangeOption = useCallback((option: SelectOption) => changeSelectedOption(option), [])

  return (
    <div className={s.container}>
      <HeaderComponent label="Select products" styles={s.headerComponent}>
        {headerButton}
      </HeaderComponent>
      {products.map((product) => (
        <Accordion
          key={product.title}
          isOpen={product.selected}
          headerComponent={Header.bind(null, product)}
        >
          <ProductsContainer>
            <InputContainer label="Package">
              <InputSelect
                optionsList={product.packages.options}
                setSelectedOption={memoChangeOption}
                selectedOption={product.packages.selectedOption}
              />
            </InputContainer>
            <InputContainer label="Policy">
              <InputSelect
                optionsList={product.policies.options}
                setSelectedOption={memoChangeOption}
                selectedOption={useMemo(
                  () => product.policies.selectedOption,
                  [product.policies.selectedOption],
                )}
              />
            </InputContainer>
            <InputContainer label="Seats">
              <SimpleInput
                styles={product.seats.error ? s.seatsInputError : s.seatsInput}
                handler={useCallback(
                  (event: React.ChangeEvent<HTMLInputElement>) =>
                    selectSeatsHandler(product.value, event),
                  [],
                )}
                defaultValue={product.seats.value}
                type="text"
              />
            </InputContainer>
          </ProductsContainer>
        </Accordion>
      ))}
      <InputContainer label="Plan name" styles={s.nameInput}>
        <SimpleInput
          handler={memoSelectPlanHandler}
          defaultValue={selectedPlanName.value}
          styles={selectedPlanName.error ? s.errorBorder : undefined}
        />
        <span className={s.error}>{selectedPlanName.error && selectedPlanName.error}</span>
      </InputContainer>
    </div>
  )
}

export default SelectProducts
