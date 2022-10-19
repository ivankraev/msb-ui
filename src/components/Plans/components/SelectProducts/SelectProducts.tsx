import React from 'react'
import { plansActions } from '@msp/features/plans/plansSlice'
import { useAppSelector } from '@msp/redux/hooks'
import { Service } from '@msp/shared/interfaces/plans.interface'
import Accordion from '@common/Accordion'
import CheckboxItem from '@common/CheckboxItem'
import InputSelect from '@common/InputSelect'
import InputStack from '@common/InputStack'
import ReadOnlyInput from '@common/ReadOnlyInput'
import s from './SelectProducts.scss'

const SelectProducts = () => {
  const { changeSelectedServices, changeSelectedOption, resetState } = plansActions()
  const { services, selectedPlan } = useAppSelector((state) => state.plans)

  const selectServiceHandler = (service: Service) => {
    changeSelectedServices(service)
  }

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
            headerComponent={Header.bind(null, service)}>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
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
                <ReadOnlyInput label={service.seats} styles={s.seatsInput} />
              </InputStack>
            </div>
          </Accordion>
        ))}
      </div>
      <InputStack label="Plan name">
        <ReadOnlyInput label={selectedPlan.title} />
      </InputStack>
    </>
  )
}

export default SelectProducts
