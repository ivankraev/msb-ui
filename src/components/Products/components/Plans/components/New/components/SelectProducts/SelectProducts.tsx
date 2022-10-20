import React from 'react'
import { debounce } from 'lodash'
import { plansActions } from '@msp/features/plans/plansSlice'
import { useAppSelector } from '@msp/redux/hooks'
import { Service } from '@msp/shared/interfaces/plans.interface'
import Accordion from '@common/Accordion'
import CheckboxItem from '@common/CheckboxItem'
import InputSelect from '@common/InputSelect'
import InputStack from '@common/InputStack'
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
    500,
  )

  const selectPlanHandler = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    selectPlan(event.target.value)
  }, 500)

  const Header = (service: Service) => (
    <CheckboxItem
      label={service.title}
      checked={service.selected}
      strong={true}
      onClick={selectServiceHandler.bind(null, service)}
    />
  )

  return (
    <>
      <h3>Select products</h3>
      <div className={s.container}>
        {services.map((service) => (
          <Accordion
            key={service.title}
            isOpen={service.selected}
            headerComponent={Header.bind(null, service)}
          >
            <div className={s.optionsContainer}>
              <InputStack label="Package">
                <InputSelect
                  optionsList={service.packageOptions.options}
                  setSelectedOption={changeSelectedOption}
                  selectedOption={service.packageOptions.selectedOption}
                />
              </InputStack>
              <InputStack label="Policy">
                <InputSelect
                  optionsList={service.policies.options}
                  setSelectedOption={changeSelectedOption}
                  selectedOption={service.policies.selectedOption}
                />
              </InputStack>
              <InputStack label="Seats">
                <SimpleInput
                  styles={s.seatsInput}
                  handler={selectSeatsHandler.bind(null, service.value)}
                />
              </InputStack>
            </div>
          </Accordion>
        ))}
      </div>
      <InputStack label="Plan name">
        <SimpleInput handler={selectPlanHandler} defaultValue={selectedPlanName} />
      </InputStack>
    </>
  )
}

export default SelectProducts
