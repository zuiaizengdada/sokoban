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

  function movePlayerToLeft() {
    if (isWall({ x: player.x - 1, y: player.y })) return

    const { findCetgo } = useCargoStore()

    const cetgo = findCetgo({ x: player.x - 1, y: player.y })

    if (cetgo) {
      cetgo.x -= 1
    }

    player.x -= 1
  }

  function movePlayerToRight() {
    if (isWall({ x: player.x + 1, y: player.y })) return

    const { findCetgo } = useCargoStore()

    const cetgo = findCetgo({ x: player.x + 1, y: player.y })

    if (cetgo) {
      cetgo.x += 1
    }

    player.x += 1
  }

  function movePlayerToTop() {
    if (isWall({ x: player.x, y: player.y - 1 })) return

    const { findCetgo } = useCargoStore()

    const cetgo = findCetgo({ x: player.x, y: player.y - 1 })

    if (cetgo) {
      cetgo.y -= 1
    }

    player.y -= 1
  }

  function movePlayerToBottom() {
    if (isWall({ x: player.x, y: player.y + 1 })) return

    const { findCetgo } = useCargoStore()

    const cetgo = findCetgo({ x: player.x, y: player.y + 1 })

    if (cetgo) {
      cetgo.y += 1
    }

    player.y += 1
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
