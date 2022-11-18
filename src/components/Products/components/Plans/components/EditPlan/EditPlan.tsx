import React, { useEffect, useMemo, useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { links } from '@msp/routes/links'
import { useUpdatePlanMutation } from '@msp/features/api/planApiSlice'
import { steps as editPlanSteps, useEditPlanInitialValues } from './config'
import { useAppDispatch, useAppSelector } from '@msp/redux/hooks'
import { filterSelectedProducts } from '@msp/utils/filter-products'
import { stepsActions } from '@msp/features/steps/stepsSlice'
import { Product } from '@msp/shared/interfaces/plans.interface'
import { argumentsMutatePlan } from '@msp/utils/arguments-mutate-plans'
import { uiComponentsActions } from '@msp/features/uiComponents/uiComponentsSlice'
import SelectProducts from '../CreatePlan/components/SelectProducts'
import Container from '@common/Container'
import FormContainer from '../CreatePlan/components/SelectProducts/components/FormContainer'
import ProvisionedProducts from '../CreatePlan/components/ProvisionedProducts'
import ButtonsContainer from '@common/ButtonsContainer'
import SubmitButton from '@msp/components/SubmitButton'
import Stepper from '@common/Stepper'
import Button from '@common/Button'
import ButtonsGroup from '@common/ButtonsGroup'
import ConfirmDialog from '@common/ConfirmDialog'
import s from './EditPlan.scss'

const EditPlan = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const navigate = useNavigate()

  const { initialValues, validationSchema } = useEditPlanInitialValues()
  const [updatePlan, { isLoading, status, data }] = useUpdatePlanMutation()

  const state = useAppSelector((state) => state)
  const { currentStep } = state.steps
  const { currentPage, limit } = state.plans
  const { showSnackBar } = uiComponentsActions()

  const { incrementStep, decrementStep, resetState: resetStepsState } = stepsActions()

  const dispatch = useAppDispatch()

  const goBackToPlans = () => {
    navigate(links.products.plans.index)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async ({ plan, id }) => {
      if (currentStep === 0) {
        incrementStep()
      } else {
        const filteredProducts = selectedProducts.map((prod) => {
          return {
            id: prod.id,
            title: prod.title,
            seats: prod.seats,
            package: prod.package.title,
            policy: prod.policy.title,
          }
        })
        const planInput = { name: plan, products: filteredProducts }

        await updatePlan({ body: planInput, id: id as string })
      }
    },
  })

  const {
    handleSubmit,
    dirty,
    isValid,
    validateForm,
    values: { products, plan },
  } = formik

  const provisionedProducts = useMemo(() => filterSelectedProducts(products), [products])
  const steps = useMemo(() => editPlanSteps, [])

  const renderSteps: { [key: number]: JSX.Element | null } = {
    0: <SelectProducts formikInstance={formik} initialValues={initialValues} />,
    1: (
      <ProvisionedProducts
        products={provisionedProducts}
        planName={plan}
        onChangeHandler={decrementStep}
      />
    ),
  }

  useEffect(() => {
    validateForm()
    return () => {
      resetStepsState()
    }
  }, [])

  useEffect(() => {
    setSelectedProducts(filterSelectedProducts(products))
  }, [products])

  useEffect(() => {
    if (status === 'fulfilled') {
      argumentsMutatePlan({
        state: state.api.queries,
        limit,
        currentPage,
        data,
        dispatch,
        action: 'update',
        showSnackBar,
      })

      goBackToPlans()
    }
  }, [status])

  const cancelHandler = () => {
    if (dirty) {
      setIsDialogOpen(true)
    } else {
      goBackToPlans()
    }
  }

  const closeDialogHandler = () => {
    setIsDialogOpen(false)
  }

  return (
    <Container label="Edit plan" styles={s.container}>
      <ConfirmDialog
        isOpen={isDialogOpen}
        closeHandler={closeDialogHandler}
        headerText="Discard changes"
        contentText="Changes won't be saved"
        confirmHandler={goBackToPlans}
      />
      <FormContainer>
        <Stepper steps={steps} />
        <form onSubmit={handleSubmit}>
          {renderSteps[currentStep]}
          <hr />
          <ButtonsContainer>
            <Button onClick={cancelHandler} type="button">
              cancel
            </Button>
            <ButtonsGroup>
              <Button onClick={decrementStep} disabled={currentStep === 0 || isLoading}>
                previous
              </Button>
              <SubmitButton
                contained={true}
                type="submit"
                disabled={!isValid || selectedProducts.length === 0 || isLoading}
                isSubmitting={isLoading}
              >
                {currentStep === 1 ? 'save plan' : 'next'}
              </SubmitButton>
            </ButtonsGroup>
          </ButtonsContainer>
        </form>
      </FormContainer>
    </Container>
  )
}

export default EditPlan
