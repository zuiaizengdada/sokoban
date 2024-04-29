import { computed } from 'vue'

export interface Position {
  x: number
  y: number
}

export function usePosition(pos: Position) {
  const STEP = 32
  const position = computed(() => ({
    top: pos.y * STEP + 'px',
    left: pos.x * STEP + 'px'
  }))

  return {
    position
  }
}
