import { defineStore } from 'pinia'
import type { Position } from '../composables/usePosition'

interface Cargo {
  x: number
  y: number
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = []

  function createCargo(cargo: Cargo): Cargo {
    return cargo
  }

  function addCargo(cargo: Cargo) {
    cargos.push(createCargo(cargo))
  }

  function findCetgo(position: Position) {
    const cetgo = cargos.find((cargo) => cargo.x === position.x && cargo.y === position.y)

    return cetgo
  }

  return {
    cargos,
    createCargo,
    addCargo,
    findCetgo
  }
})
