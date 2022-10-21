import React, { useState } from 'react'
import { debounce } from 'lodash'
import { plansActions } from '@msp/features/plans/plansSlice'
import { useAppSelector } from '@msp/redux/hooks'
import { Service } from '@msp/shared/interfaces/plans.interface'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import Accordion from '@common/Accordion'
import CheckboxItem from '@common/CheckboxItem'
import InputSelect from '@common/InputSelect'
import InputContainer from '@common/InputContainer'
import SimpleInput from '@common/SimpleInput'
import s from './SelectProducts.scss'

const SelectProducts = () => {
  const { changeSelectedServices, changeSelectedOption, selectSeats, selectPlan } = plansActions()
  const { services, selectedPlanName } = useAppSelector((state) => state.plans)

  const selectServiceHandler = (service: Service) => {
    changeSelectedServices(service)
  }

  const selectSeatsHandler = debounce(
    (accessor: string, event: React.ChangeEvent<HTMLInputElement>) => {
      selectSeats({ accessor, value: Number(event.target.value) })
    },
    300,
  )

  const selectPlanHandler = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    selectPlan(event.target.value)
  }, 300)

  const Header = (service: Service) => {
    return (
      <CheckboxItem
        label={service.title}
        checked={service.selected}
        strong={true}
        onClick={selectServiceHandler.bind(null, service)}
      />
    )
  }

  console.log(selectedPlanName)

  return (
    <div className={s.container}>
      <HeaderComponent label="Select products" styles={s.headerComponent} />
      {services.map((service) => (
        <Accordion
          key={service.title}
          isOpen={service.selected}
          headerComponent={Header.bind(null, service)}>
          <div className={s.optionsContainer}>
            <InputContainer label="Package">
              <InputSelect
                optionsList={service.packageOptions.options}
                setSelectedOption={changeSelectedOption}
                selectedOption={service.packageOptions.selectedOption}
              />
            </InputContainer>
            <InputContainer label="Policy">
              <InputSelect
                optionsList={service.policies.options}
                setSelectedOption={changeSelectedOption}
                selectedOption={service.policies.selectedOption}
              />
            </InputContainer>
            <InputContainer label="Seats">
              <SimpleInput
                styles={service.seats.error ? s.seatsInputError : s.seatsInput}
                handler={selectSeatsHandler.bind(null, service.value)}
                defaultValue={service.seats.value}
                type="text"
              />
            </InputContainer>
          </div>
        </Accordion>
      ))}
      <InputContainer label="Plan name" styles={s.nameInput}>
        <SimpleInput
          handler={selectPlanHandler}
          defaultValue={selectedPlanName.value}
          styles={selectedPlanName.error ? s.errorBorder : undefined}
        />
        <span className={s.error}>{selectedPlanName.error && selectedPlanName.error}</span>
      </InputContainer>
    </div>
  )
}

export default SelectProducts
