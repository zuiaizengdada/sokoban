import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'
import { createPinia, setActivePinia } from 'pinia'
import { useTargetStore } from '../target'

describe('cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should add a cargo', () => {
    const { addCargo, createCargo, cargos } = useCargoStore()

    const cargo = createCargo({ x: 2, y: 1 })

    addCargo(cargo)

    expect(cargos.length).toBe(1)
  })

  describe('on target', () => {
    it('shift in', () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(createCargo(cargo))

      const { createTartge, addTarget } = useTargetStore()
      addTarget(createTartge({ x: 3, y: 1 }))

      moveCargo(cargo, 1, 0)

      expect(cargo.onTarget).toBe(true)
    })

    it('shift out', () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 1 })
      addCargo(createCargo(cargo))

      const { createTartge, addTarget } = useTargetStore()
      addTarget(createTartge({ x: 2, y: 1 }))

      moveCargo(cargo, 1, 0)
      moveCargo(cargo, 1, 0)

      expect(cargo.onTarget).toBe(false)
    })
  })
})
