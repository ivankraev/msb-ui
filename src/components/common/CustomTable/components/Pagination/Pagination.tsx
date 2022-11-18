import React, { useState, useRef, useEffect } from 'react'
import { PaginationProps } from '@common/CustomTable/types'
import useClickOutside from '@msp/hooks/useClickOutside'
import AngleRightIcon from '@msp/components/icons/AngleRightIcon'
import AngleLeftIcon from '@msp/components/icons/AngleLeftIcon'
import AngleDownIcon from '@msp/components/icons/AngleDownIcon'
import variables from '@msp/theme/variables.scss'
import s from './Pagination.scss'

const OPTIONS = [5, 10, 15, 20]

const Pagination = ({
  currentPage,
  totalPages = 0,
  resultsPerPage = 0,
  resultsCount = 0,
  onPageChange,
  setResultsPerPage,
}: PaginationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const ignoredElement = useRef<HTMLDivElement | null>(null)

  const menuRef = useClickOutside(closeMenu, isMenuOpen, ignoredElement)

  const goToNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages))
  }

  const goToPreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1))
  }

  const startIndex = Math.max(1, resultsPerPage * (currentPage - 1))
  const endIndex = Math.min(resultsPerPage * currentPage, resultsCount)

  useEffect(() => {
    // if we have 5 results per page and we are on the last page then
    // we switch to 20 results per page the current page will not be
    // relevant to the displayed results so we need to handle that case

    if (startIndex >= endIndex && startIndex > 1) {
      const neededPage = Math.ceil(resultsCount / resultsPerPage)
      onPageChange(neededPage)
    }
  }, [resultsPerPage, resultsCount])

  return (
    <div className={s.container}>
      <div>
        <div className={s.resultsPerPage}>
          <p>Results per page: {resultsPerPage}</p>
          <div ref={ignoredElement}>
            <AngleDownIcon color={variables.secondaryColor} onClick={toggleMenu} />
          </div>
          <ul ref={menuRef} style={{ display: !isMenuOpen ? 'none' : 'block' }}>
            {OPTIONS.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setResultsPerPage(option)
                  closeMenu()
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        {totalPages > 1 && (
          <>
            <p>
              {startIndex}-{endIndex} of {resultsCount}
            </p>
            <div className={s.arrowsHolder}>
              <AngleLeftIcon
                color={currentPage === 1 ? variables.greyColor : variables.secondaryColor}
                disabled={currentPage === 1}
                onClick={goToPreviousPage}
              />
              <AngleRightIcon
                color={variables.secondaryColor}
                disabled={currentPage === totalPages}
                onClick={goToNextPage}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Pagination
