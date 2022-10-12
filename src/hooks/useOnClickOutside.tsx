import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hasSomeParentWithClass(element: any, classname: string): boolean {
  if (
    typeof element?.className === 'string' &&
    (element.classList.contains(classname) || element.className.split(' ').indexOf(classname) >= 0)
  )
    return true
  return element.parentNode ? hasSomeParentWithClass(element.parentNode, classname) : false
}

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  clickOutsideIgnoreClassName: string,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current
      const elementOrParentHasIgnoredClass = hasSomeParentWithClass(
        event.target,
        clickOutsideIgnoreClassName,
      )
      if (!el || elementOrParentHasIgnoredClass || el.contains((event?.target as Node) || null)) {
        return
      }

      handler(event) // Call the handler only if the click is outside of the element passed.
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler]) // Reload only if ref or handler changes
}

export default useOnClickOutside
