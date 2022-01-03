import { useRef } from 'react'

export default function useRoot() {
  const rootRef = useRef<HTMLElement>(null)

  return { rootRef }
}
