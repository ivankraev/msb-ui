export interface PaginationProps {
  currentPage: number
  totalPages: number
  resultsCount: number
  resultsPerPage: number
  onPageChange: (num: number) => void
  setResultsPerPage: (num: number) => void
}
