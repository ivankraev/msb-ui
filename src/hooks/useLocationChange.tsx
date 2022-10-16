import { useEffect, useRef } from 'react'
import { useLocation, Location } from 'react-router'

const usePrevious = (value: Location | null) => {
  const ref = useRef<Location | null>(null)
  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export const useLocationChange = (
  action: (location: Location, prevLocation: Location | null) => void,
) => {
  const location = useLocation()

  const prevLocation = usePrevious(location)

  useEffect(() => {
    action(location, prevLocation)
  }, [location])
}
