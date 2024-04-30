import { it, expect, describe, beforeEach } from 'vitest'
import { usePlayerStore } from '../player'
import { createPinia, setActivePinia } from 'pinia'
import { useMapStore } from '../map'
import { useCargoStore } from '../cargo'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('normal move', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()

      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
      ])

      const { setupPlayer } = usePlayerStore()

      setupPlayer({ x: 1, y: 1 })
    })

    it('should move to left', () => {
      const { player, movePlayerToLeft } = usePlayerStore()

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
  })

  describe('collision wall', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()

      setupMap([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1]
      ])
    })

    it('should not move to left when collision a wall', () => {
      const { player, movePlayerToLeft, setupPlayer } = usePlayerStore()

      setupPlayer({ x: 1, y: 1 })

      movePlayerToLeft()

      expect(player.x).toBe(1)
    })

    it('should not move to right when collision a wall', () => {
      const { player, movePlayerToRight, setupPlayer } = usePlayerStore()

      setupPlayer({ x: 3, y: 1 })

      movePlayerToRight()

      expect(player.x).toBe(3)
    })

    it('should not move to top when collision a wall', () => {
      const { player, movePlayerToTop, setupPlayer } = usePlayerStore()

      setupPlayer({ x: 1, y: 1 })

      movePlayerToTop()

      expect(player.y).toBe(1)
    })

    it('should not move to bottom when collision a wall', () => {
      const { player, movePlayerToBottom, setupPlayer } = usePlayerStore()

      setupPlayer({ x: 1, y: 3 })

      movePlayerToBottom()

      expect(player.y).toBe(3)
    })
  })

  describe('push a cargo', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()

      setupMap([
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
      ])
    })

    it('should push a cargo to left', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 3 })
      addCargo(cargo)

      const { player, movePlayerToLeft, setupPlayer } = usePlayerStore()
      setupPlayer({ x: 3, y: 3 })
      movePlayerToLeft()

      expect(cargo.x).toBe(1)
      expect(player.x).toBe(2)
    })

    it('should push a cargo to right', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 3, y: 3 })
      addCargo(cargo)

      const { player, movePlayerToRight, setupPlayer } = usePlayerStore()
      setupPlayer({ x: 2, y: 3 })
      movePlayerToRight()

      expect(cargo.x).toBe(4)
      expect(player.x).toBe(3)
    })

    it('should push a cargo to top', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)

      const { player, movePlayerToTop, setupPlayer } = usePlayerStore()
      setupPlayer({ x: 1, y: 3 })
      movePlayerToTop()

      expect(cargo.y).toBe(1)
      expect(player.y).toBe(2)
    })

    it('should push a cargo to bottom', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)

      const { player, movePlayerToBottom, setupPlayer } = usePlayerStore()
      setupPlayer({ x: 1, y: 1 })
      movePlayerToBottom()

      expect(cargo.y).toBe(3)
      expect(player.y).toBe(2)
    })

    it('fix', () => {
      let map = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
      ]

      const { setupMap } = useMapStore()
      setupMap(map)

      const { player, setupPlayer, movePlayerToRight } = usePlayerStore()

      setupPlayer({ x: 4, y: 1 })

      movePlayerToRight()

      expect(player.x).toBe(5)
    })

    it('should not push a cargo when cargo hits', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 1 })
      addCargo(cargo)

      const { player, movePlayerToLeft, setupPlayer } = usePlayerStore()
      setupPlayer({ x: 2, y: 1 })
      movePlayerToLeft()

      expect(cargo.x).toBe(1)
      expect(player.x).toBe(2)
    })

    it('should not push a cargo when cargo hits other cargo', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo1 = createCargo({ x: 2, y: 1 })
      addCargo(cargo1)
      const cargo2 = createCargo({ x: 3, y: 1 })
      addCargo(cargo2)

      const { player, movePlayerToLeft, setupPlayer } = usePlayerStore()
      setupPlayer({ x: 1, y: 1 })
      movePlayerToLeft()

      expect(cargo1.x).toBe(2)
      expect(cargo2.x).toBe(3)
      expect(player.x).toBe(1)
    })
  })
})
