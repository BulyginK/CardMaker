import { useEffect, useRef, useState } from "react";

function useDragggableList() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  const dragedItemRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const unsubscribes = itemsRef.current.map(itemElement => {
      const onMouseDown = (event: MouseEvent) => {
        dragedItemRef.current = itemElement
      }
      itemElement.addEventListener('mousedown', onMouseDown)

      return () => itemElement.removeEventListener('mousedown', onMouseDown)
    })

    return () => {
      unsubscribes.forEach(unsubscribes => unsubscribes)
    }
  }, [])
}
