import { useEffect, useState } from "react";
import { throttle } from 'underscore'

export default function useScroll() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const scrollListener = throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return {
    scrollX,
    scrollY
  }
}