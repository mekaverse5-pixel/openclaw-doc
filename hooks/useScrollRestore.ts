'use client'

import { useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

const SCROLL_position_KEY = 'openclaw-scroll-position'

interface ScrollPosition {
  [key: string]: number
}

export function useScrollRestore() {
  const pathname = usePathname()

  const saveScrollPosition = useCallback(() => {
    const positions: ScrollPosition = JSON.parse(
      sessionStorage.getItem(SCROLL_position_KEY) || '{}'
    )
    positions[pathname] = window.scrollY
    sessionStorage.setItem(SCROLL_position_KEY, JSON.stringify(positions))
  }, [pathname])

  const restoreScrollPosition = useCallback(() => {
    const positions: ScrollPosition = JSON.parse(
      sessionStorage.getItem(SCROLL_position_KEY) || '{}'
    )
    const savedPosition = positions[pathname]
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo({ top: savedPosition, behavior: 'instant' })
      }, 0)
    }
  }, [pathname])

  useEffect(() => {
    restoreScrollPosition()

    const handleBeforeUnload = () => {
      saveScrollPosition()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      saveScrollPosition()
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [pathname, saveScrollPosition, restoreScrollPosition])
}
