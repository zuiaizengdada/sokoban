import { it, expect, describe, beforeEach } from 'vitest'
import { usePlayerStore } from '../player'
import { createPinia, setActivePinia } from 'pinia'
import { useMapStore } from '../map'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const { reset } = usePlayerStore()
    reset()
  })

  it('should move to left', () => {
    const { map, setupMap } = useMapStore()

    setupMap([
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2]
    ])

    const { player, movePlayerToLeft } = usePlayerStore()

    player.x = 1
    player.y = 1

    movePlayerToLeft()

    expect(player.x).toBe(0)
  })

  it('should move to right', () => {
    const { player, movePlayerToRight } = usePlayerStore()

    movePlayerToRight()

    expect(player.x).toBe(2)
  })

  it('should move to top', () => {
    const { player, movePlayerToTop } = usePlayerStore()

    movePlayerToTop()

    expect(player.y).toBe(0)
  })

  it('should move to bottom', () => {
    const { player, movePlayerToBottom } = usePlayerStore()

    movePlayerToBottom()

    expect(player.y).toBe(2)
  })

  it('should not move to left when collision a wall', () => {
    const { player, movePlayerToLeft } = usePlayerStore()

    movePlayerToLeft()

    expect(player.x).toBe(1)
  })
})
