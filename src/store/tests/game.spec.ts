import { createPinia, setActivePinia } from 'pinia'
import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target'
import { useGameStore } from '../game'

describe('game', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should game completed', () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 1 })
    addCargo(cargo)

    const { addTarget, createTartge } = useTargetStore()
    addTarget(createTartge({ x: 3, y: 1 }))
    moveCargo(cargo, 1, 0)

    const { detectionGameCompleted, game } = useGameStore()
    detectionGameCompleted()

    expect(game.isGameCompleted).toBe(true)
  })
})
