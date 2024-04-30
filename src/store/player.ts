import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useMapStore } from './map'
import { useCargoStore } from './cargo'

interface Player {
  x: number
  y: number
}

export const usePlayerStore = defineStore('player', () => {
  const { isWall } = useMapStore()
  const player = reactive({
    x: 3,
    y: 3
  })

  function _move(dx: number, dy: number) {
    const nextPosition = { x: player.x + dx, y: player.y + dy }

    if (isWall(nextPosition)) return

    const { findCargo, moveCargo } = useCargoStore()
    const cargo = findCargo(nextPosition)

    if (cargo) {
      const isMoveCargo = moveCargo(cargo, dx, dy)
      if (!isMoveCargo) return
    }

    player.x += dx
    player.y += dy
  }

  function movePlayerToLeft() {
    _move(-1, 0)
  }

  function movePlayerToRight() {
    _move(1, 0)
  }

  function movePlayerToTop() {
    _move(0, -1)
  }

  function movePlayerToBottom() {
    _move(0, 1)
  }

  function setupPlayer(setupPlayerer: Player) {
    player.x = setupPlayerer.x
    player.y = setupPlayerer.y
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToTop,
    movePlayerToBottom,
    setupPlayer
  }
})
