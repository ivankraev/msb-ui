import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import cx from 'classnames'
import { useDeletePlanMutation } from '@msp/features/api/planApiSlice'
import { useNavigate } from 'react-router-dom'
import { links } from '@msp/routes/links'
import { useAppDispatch, useAppSelector } from '@msp/redux/hooks'
import { argumentsMutatePlan } from '@msp/utils/arguments-mutate-plans'
import { uiComponentsActions } from '@msp/features/uiComponents/uiComponentsSlice'
import ConfirmDialog from '@common/ConfirmDialog'
import s from './ActionsMenu.scss'

interface Props {
  isOpen?: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
  cellId: string
}

const ActionsMenu = ({ isOpen, setMenuOpen, cellId }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const state = useAppSelector((state) => state)

  const { currentPage, limit } = state.plans
  const { showSnackBar } = uiComponentsActions()

  const dispatch = useAppDispatch()

  const [deletePlan, { status, isLoading, data }] = useDeletePlanMutation()

  const navigate = useNavigate()

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  const onDeleteHandler = async () => {
    deletePlan(cellId)
  }

  const onEditHandler = () => {
    navigate(links.products.plans.plan(cellId))
  }

  useEffect(() => {
    if (status === 'fulfilled') {
      argumentsMutatePlan({
        state: state.api.queries,
        limit,
        currentPage,
        data,
        dispatch,
        action: 'delete',
        showSnackBar,
      })

      closeDialog()
    }
  }, [status])

  return (
    <div>
      <ConfirmDialog
        isOpen={isDialogOpen}
        confirmHandler={onDeleteHandler}
        closeHandler={closeDialog}
        headerText="Delete plan"
        contentText="Are you sure you want to delete this plan"
        isSubmitting={isLoading}
      />
      <div className={cx(s.container, { [s.hidden]: !isOpen })}>
        <ul>
          <li
            onClick={() => {
              setMenuOpen(false)
              onEditHandler()
            }}
          >
            <span>Edit</span>
          </li>
          <li
            onClick={() => {
              setMenuOpen(false)
              setIsDialogOpen(true)
            }}
          >
            <span>Remove</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ActionsMenu
