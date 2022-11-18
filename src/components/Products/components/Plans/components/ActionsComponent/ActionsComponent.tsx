import React, { useRef, useState } from 'react'
import useClickOutside from '@msp/hooks/useClickOutside'
import { CellProps } from 'react-table'
import { Plan } from '../../types'
import ActionsMenu from '../ActionsMenu'
import s from './ActionsComponent.scss'

const ActionsComponent = ({ cell }: CellProps<Plan>) => {
  const [actionsMenuOpen, setActionsMenuOpen] = useState(cell.row.original.actionsOpen)

  const closeMenu = () => {
    setActionsMenuOpen(false)
  }

  const ignoredElement = useRef<HTMLButtonElement | null>(null)

  const menuRef = useClickOutside(closeMenu, actionsMenuOpen, ignoredElement)

  return (
    <div className={s.container}>
      <button
        className={s.dotsButton}
        onClick={() => setActionsMenuOpen(!actionsMenuOpen)}
        ref={ignoredElement}
      >
        ...
      </button>
      <div ref={menuRef}>
        <ActionsMenu
          isOpen={actionsMenuOpen}
          setMenuOpen={setActionsMenuOpen}
          cellId={cell.row.original.id}
        />
      </div>
    </div>
  )
}
export default ActionsComponent
