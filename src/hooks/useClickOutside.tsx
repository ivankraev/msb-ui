import { useRef } from 'react'
import { useEffect } from 'react'
/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
const useClickOutside = (handler: () => void, isOpen: boolean, ignoredElement: any) => {
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  const trigger = useRef<any>(null)

  useEffect(() => {
    const openTrigger = (e: MouseEvent) => {
      if (
        !trigger.current?.contains(e.target as Node | null) &&
        !ignoredElement.current?.contains(e.target as Node | null)
      ) {
        handler()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', openTrigger)
    }
    return () => {
      document.removeEventListener('mousedown', openTrigger)
    }
  })
  return trigger
}

export default useClickOutside
