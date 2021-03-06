import { RefObject, useCallback, useEffect } from "react"

export const useInfiniteScroll = (
  scrollRef: RefObject<any>,
  callback: () => void
) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            callback()
          }
        })
      }).observe(node)
    },
    [callback]
  )

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current)
    }
  }, [scrollObserver, scrollRef])
}
