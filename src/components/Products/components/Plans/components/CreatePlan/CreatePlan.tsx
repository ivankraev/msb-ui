import React, { useEffect, useMemo, useState } from 'react'
import { MutationActionCreatorResult } from '@reduxjs/toolkit/dist/query/core/buildInitiate'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@msp/redux/hooks'
import { argumentsMutatePlan } from '@msp/utils/arguments-mutate-plans'
import { stepsActions } from '@msp/features/steps/stepsSlice'
import {
  steps as planSteps,
  useInitialProductsValues,
} from '@msp/components/Products/components/Plans/components/CreatePlan/config'
import { links } from '@msp/routes/links'
import { useFormik } from 'formik'
import { filterSelectedProducts } from '@msp/utils/filter-products'
import { useCreatePlanMutation } from '@msp/features/api/planApiSlice'
import { Product } from '@msp/shared/interfaces/plans.interface'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/dist/query'
import { CreatePlanInput, PlanResult } from '@msp/features/api/types'
import { uiComponentsActions } from '@msp/features/uiComponents/uiComponentsSlice'
import SubmitButton from '@msp/components/SubmitButton'
import SelectProducts from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts'
import FormContainer from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts/components/FormContainer'
import ProvisionedProducts from './components/ProvisionedProducts'
import ButtonsContainer from '@common/ButtonsContainer'
import ConfirmDialog from '@common/ConfirmDialog'
import ButtonsGroup from '@common/ButtonsGroup'
import Container from '@common/Container'
import Stepper from '@common/Stepper'
import Button from '@common/Button'
import s from './CreatePlan.scss'
import { plansActions } from '@msp/features/plans/plansSlice'

let updatingRequest: MutationActionCreatorResult<
  MutationDefinition<
    CreatePlanInput,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      Record<string, unknown>,
      FetchBaseQueryMeta
    >,
    never,
    PlanResult,
    'api'
  >
>

const CreatePlan = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const { currentStep } = state.steps
  const { incrementStep, decrementStep, resetState: resetStepsState } = stepsActions()
  const { changeCurrentPage } = plansActions()
  const { currentPage, limit } = state.plans
  const { showSnackBar } = uiComponentsActions()

  const navigate = useNavigate()

  const [createPlan, { isLoading, status, data }] = useCreatePlanMutation()

  const { validationSchema, initialValues } = useInitialProductsValues()

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: ({ plan }) => {
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
        updatingRequest = createPlan(planInput)
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

  const steps = useMemo(() => planSteps, [])

  const renderSteps: { [key: number]: JSX.Element | null } = {
    0: <SelectProducts formikInstance={formik} initialValues={initialValues} />,
    1: (
      <ProvisionedProducts
        products={selectedProducts}
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
        limit,
        state: state.api.queries,
        data,
        dispatch,
        action: 'create',
        showSnackBar,
      })

      goBackToPlans()
      currentPage !== 1 && changeCurrentPage(1)
    }
  }, [status])

  const goBackToPlans = () => {
    if (isLoading) {
      updatingRequest.abort()
    }
    navigate(links.products.plans.index)
  }

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
    <Container label="New plan" styles={s.container}>
      <ConfirmDialog
        isOpen={isDialogOpen}
        closeHandler={closeDialogHandler}
        headerText="Discard changes"
        contentText="Changes won't be saved"
        confirmHandler={goBackToPlans}
      />
      <FormContainer styles={s.formContainer}>
        <Stepper steps={steps} />
        <form onSubmit={handleSubmit}>
          {renderSteps[currentStep]}
          <hr />
          <ButtonsContainer>
            <Button onClick={cancelHandler} type="button" textOnly={true}>
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

export default CreatePlan
