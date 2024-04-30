import { defineStore } from 'pinia'
import type { Position } from '../composables/usePosition'
import { reactive } from 'vue'
import { useMapStore } from './map'

interface Cargo {
  x: number
  y: number
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = reactive([])

  function createCargo(cargo: Cargo): Cargo {
    return cargo
  }

  function addCargo(cargo: Cargo) {
    cargos.push(createCargo(cargo))
  }

  function findCargo(position: Position) {
    const cargo = cargos.find((cargo) => cargo.x === position.x && cargo.y === position.y)

    return cargo
  }

  function moveCargo(cargo: Cargo, dx: number, dy: number) {
    const { isWall } = useMapStore()
    const position = {
      x: cargo.x + dx,
      y: cargo.y + dy
    }

    if (isWall(position)) {
      return false
    }

    if (findCargo(position)) {
      return false
    }

    cargo.x += dx
    cargo.y += dy

    return true
  }

  return {
    cargos,
    createCargo,
    addCargo,
    findCargo,
    moveCargo
  }
})
